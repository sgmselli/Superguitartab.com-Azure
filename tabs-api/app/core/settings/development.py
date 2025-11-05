from pydantic_settings import SettingsConfigDict

from app.core.settings.base import BaseAppSettings

class DevelopmentSettings(BaseAppSettings):
    debug: bool = True
    allowed_hosts: list[str] = ["*"]
    allow_origins: list[str] = ["*"]
    database_url: str = "postgresql://postgres:password@db:5432/guitartabsdb"

    model_config = SettingsConfigDict(
        env_file='.env',
        extra="ignore"
    )