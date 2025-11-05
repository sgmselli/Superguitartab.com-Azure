from fastapi import FastAPI

from app.router.v1.router import router
from app.core.config import settings

def create_app() -> FastAPI:
    _app = FastAPI(**settings.fast_api_kwargs)
    _app.include_router(router, prefix=settings.api_v1_prefix)

    return _app

app = create_app()
