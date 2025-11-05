from pydantic_settings import BaseSettings
from typing import Optional, Any
import os

from app.schema.environment import AppEnvTypes

def get_environment_type() -> AppEnvTypes:
    environment = os.getenv("APP_ENV", "DEVELOPMENT").upper()
    try:
        return AppEnvTypes(environment)
    except ValueError:
        return AppEnvTypes.DEVELOPMENT

class BaseAppSettings(BaseSettings):
    app_env: AppEnvTypes = get_environment_type()
    api_v1_prefix: str = '/api/v1'
    title: str = 'Guitar tabs API'
    docs_url: str = '/docs'
    version: str = '1.0.0'
    allow_credentials: bool = True
    allow_methods: list[str] = ["*"]
    allow_headers: list[str] = ["*"]

    debug: Optional[bool] = None
    allowed_hosts: Optional[list[str]] = None
    allow_origins: Optional[list[str]] = []
    database_url: Optional[str] = None

    @property
    def fast_api_kwargs(self) -> dict[str, Any]:
        return {
            "debug": self.debug,
            "docs_url": self.docs_url,
            "title": self.title,
            "version": self.version
        }
