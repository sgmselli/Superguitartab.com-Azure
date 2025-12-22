class S3ClientException(Exception):
    def __init__(self):
        super().__init__(f"Failed to complete S3 client request.")
