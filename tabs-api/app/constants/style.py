from enum import Enum

class Style(str, Enum):
    """
    Constants for the different styles of playing guitar
    """
    FINGER_PICKING = "finger picking"
    STRUMMING = "strumming"