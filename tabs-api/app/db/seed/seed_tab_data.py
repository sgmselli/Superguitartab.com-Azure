import asyncio
import json
from sqlalchemy.future import select

from app.db.base import Tab
from app.db.session import AsyncSessionLocal
from app.utils.logging import Logger, LogLevel

async def seed_tabs_from_manifest(path: str = "./song_data.json"):
    """
    Seed the database with tabs from a local JSON manifest.
    Only updates fields that have changed.
    Does NOT overwrite protected fields like `downloads`.
    """
    PROTECTED_FIELDS = {"downloads"}

    async with AsyncSessionLocal() as session:
        try:
            with open(path) as f:
                tabs = json.load(f)

            for t in tabs:
                result = await session.execute(
                    select(Tab).where(Tab.id == t["id"])
                )
                tab = result.scalars().first()

                if not tab:
                    session.add(Tab(**t))
                    Logger.log(
                        LogLevel.INFO,
                        f"Added song {t['song_name']} to database."
                    )
                    await session.commit()
                    continue

                # Track whether anything actually changed
                has_changes = False

                for key, value in t.items():
                    if key in PROTECTED_FIELDS:
                        continue

                    if not hasattr(tab, key):
                        continue

                    current_value = getattr(tab, key)

                    # Only update if the value is different
                    if current_value != value:
                        setattr(tab, key, value)
                        has_changes = True

                if has_changes:
                    await session.commit()
                    Logger.log(
                        LogLevel.INFO,
                        f"Updated song {t['song_name']} in database."
                    )

        except Exception as e:
            await session.rollback()
            Logger.log(LogLevel.ERROR, f"Seeding failed: {e}")

        Logger.log(LogLevel.INFO, "Seeding complete.")

if __name__ == "__main__":
    asyncio.run(seed_tabs_from_manifest())