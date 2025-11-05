from fastapi import APIRouter

from app.router.v1 import tabs

router = APIRouter()

router.include_router(tabs.router, prefix="/tabs", tags=["tabs"])