from enum import Enum

class Genre(str, Enum):
    """
    Constants for the different music genres
    """
    ROCK = "rock"
    JAZZ = "jazz"
    INDIE = "indie"
    INDIE_ROCK = "indie rock"
    POP = "pop"
    METAL = "metal"
    FOLK = "folk"

