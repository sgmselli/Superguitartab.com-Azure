from pydantic import BaseModel

class TabOut(BaseModel):
    id: int
    song_name: str
    artist: str