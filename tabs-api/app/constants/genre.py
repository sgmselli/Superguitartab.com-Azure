from enum import Enum

class Genre(str, Enum):
    """
    Constants for the different music genres
    """
    CLASSICAL = "classical"
    COUNTRY = "country"
    FOLK = "folk"
    INDIE = "indie"
    METAL = "metal"
    POP = "pop"
    ROCK = "rock"
    CHRISTMAS = "christmas"
