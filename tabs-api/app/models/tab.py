from sqlalchemy import Column, Integer, String, Enum

from app.db.base_class import Base
from app.constants.genre import Genre
from app.constants.style import Style

class Tab(Base):
    __tablename__ = 'tabs'

    id = Column(Integer, primary_key=True, index=True)
    song_name = Column(String(100), nullable=False, index=True)
    artist = Column(String(100), nullable=False)
    genre = Column(Enum(Genre, name="genre_type", native_enum=False), nullable=True)
    style = Column(Enum(Style, name="style_type", native_enum=False), nullable=True)
    file_key = Column(String(255), nullable=False)
    file_name = Column(String(255), nullable=False)

