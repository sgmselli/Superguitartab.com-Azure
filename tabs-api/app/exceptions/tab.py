class IncorrectFileType(Exception):
    def __init__(self):
        """
           Raised when attempting to fetch a user with a Google ID that does not exist.
        """
        super().__init__(f"The file type uploaded is not allowed.")