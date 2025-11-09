from fastapi import File
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.future import select

from app.schema.tab import TabCreate
from app.models.tab import Tab
from app.constants.genre import Genre
from app.constants.style import Style

async def get_tab_by_id(tab_id: int, session: AsyncSession) -> Tab:
    """
    Get a tab using the tab's id and return it
    """
    tab = await session.get(Tab, tab_id)
    return tab

async def create_tab(tab_create: TabCreate, session: AsyncSession) -> Tab:
    """
    Create a tab and store in db
    """
    tab = Tab(**tab_create.model_dump())
    session.add(tab)
    await session.commit()
    await session.refresh(tab)
    return tab

async def get_tabs_by_genre(
    genre: Genre,
    session: AsyncSession,
    limit: int = 10,
    offset: int = 0
) -> list[Tab]:
    """
    Fetch tabs filtered by genre, with pagination.
    """
    query = (
        select(Tab)
        .where(Tab.genre == genre)
        .offset(offset)
        .limit(limit)
    )
    result = await session.execute(query)
    tabs = result.scalars().all()
    return tabs

async def get_tabs_by_style(
    style: Style,
    session: AsyncSession,
    limit: int = 10,
    offset: int = 0
) -> list[Tab]:
    """
    Fetch tabs filtered by style, with pagination.
    """
    query = (
        select(Tab)
        .where(Tab.style == style)
        .offset(offset)
        .limit(limit)
    )
    result = await session.execute(query)
    tabs = result.scalars().all()
    return tabs

async def download_tab(tab_id: int, session: AsyncSession) -> Tab:
    pass