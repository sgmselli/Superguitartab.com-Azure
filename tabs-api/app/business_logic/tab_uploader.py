from fastapi import File
from uuid import uuid4
import re

from app.external_services.s3_client import S3Client


class TabUploader:
    """
    Utility class to upload a guitar tab to a bucket
    """
    def __init__(
        self,
        song_name: str,
        artist: str,
        tab_file: File
    ):
        self.song_name = self._sanitize_filename(song_name)
        self.artist =  self._sanitize_filename(artist)
        self.tab_file = tab_file
        self.s3_tab_file_key = self._create_s3_tab_file_key()

    async def upload_tab(self) -> bool:
        """
        Upload the file to the s3 bucket and return true if successful
        """
        return await S3Client().upload_fileobj(self.get_s3_tab_file_key(), self.tab_file)
    
    def get_s3_tab_file_key(self) -> str:
        return self.s3_tab_file_key

    def get_file_name(self):
        return f"{self.song_name}.pdf"

    def _create_s3_tab_file_key(self) -> str:
        """
        Return a s3 file key for the tab
        """
        return f"tabs/{self.artist}/{self.song_name}-{self._create_identifier()}.pdf"

    @staticmethod
    def _create_identifier() -> str:
        """
        Create 10 random char string
        """
        return uuid4().hex[:10]

    @staticmethod
    def _sanitize_filename(name: str) -> str:
        """
        # Remove unsafe characters and lowercase
        # """
        return re.sub(r'[^a-zA-Z0-9_-]', '-', name.strip().lower())

