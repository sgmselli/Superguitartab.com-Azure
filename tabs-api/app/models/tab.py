from sqlalchemy import Column, Integer, String, Enum, Boolean
from uuid import uuid4

from app.db.base_class import Base
from app.constants.genre import Genre
from app.constants.style import Style
from app.constants.difficulty_level import DifficultyLevel

class Tab(Base):
    __tablename__ = 'tabs'

    id = Column(Integer, primary_key=True, index=True)
    song_name = Column(String(100), nullable=False, index=True)
    artist = Column(String(100), nullable=True)
    album = Column(String(100), nullable=True)
    genre = Column(Enum(Genre, name="genre_type", native_enum=False), nullable=True)
    style = Column(Enum(Style, name="style_type", native_enum=False), nullable=True)
    difficulty = Column(Enum(DifficultyLevel, name="difficulty_type", native_enum=False), nullable=True)
    description = Column(String(500), nullable=False)
    lyrics_included = Column(Boolean, nullable=False, default=False)
    file_key = Column(String(255), nullable=False)
    file_name = Column(String(255), nullable=False)
    downloads = Column(Integer, nullable=False,  default=0)

