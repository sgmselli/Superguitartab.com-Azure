from app.core.settings.base import BaseAppSettings

class ProductionSettings(BaseAppSettings):
    debug: bool = True
    allowed_hosts: list[str] = ["prod.api.com"]
    allow_origins: list[str] = ["prod.frontend.com"]