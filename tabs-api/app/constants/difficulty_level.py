from enum import Enum

class DifficultyLevel(str, Enum):
    """
    Constants for the levels of dificulty of songs
    """
    BEGINNER = "Beginner"
    INTERMEDIATE = "Intermediate"
    ADVANCED = "Advanced"