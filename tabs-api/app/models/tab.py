from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship

from app.db.base import Base

class Tab(Base):
    __tablename__ = 'tabs'

    id = Column(Integer, primary_key=True, index=True)
    song_name = Column(String, nullable=False, index=True)
    artist = Column(String, nullable=False)

