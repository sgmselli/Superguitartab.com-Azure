from fastapi import File
from uuid import uuid4
import re

from app.exceptions.tab import IncorrectFileType
from app.external_services.s3_client import S3Client
from app.utils.logging import Logger, LogLevel


class TabUploader:
    """
    Utility class to upload a guitar tab to a bucket
    """
    def __init__(
        self,
        song_name: str,
        artist: str,
    ):
        self.song_name = self._sanitize_filename(song_name)
        self.artist =  self._sanitize_filename(artist)
        self.identifier = self._create_identifier()
        self.uploaded_files = []

    async def upload_tab_original(self, tab_file: File) -> None:
        """
        Upload the downloadable tab PDF to the s3 bucket and return true if successful.

        Throw IncorrectFileType exception if invalid file type.
        """
        if tab_file.content_type != "application/pdf" or not tab_file.filename.lower().endswith(".pdf"):
            raise IncorrectFileType()

        self.uploaded_files.append(self.get_s3_tab_original_file_key())

        await S3Client().upload_fileobj(self.get_s3_tab_original_file_key(), tab_file)

    async def upload_tab_preview(self, tab_file: File) -> None:
        """
        Upload the preview tab PDF to the s3 bucket and return true if successful.

        Throw IncorrectFileType exception if invalid file type.
        """
        if tab_file.content_type != "application/pdf" or not tab_file.filename.lower().endswith(".pdf"):
            raise IncorrectFileType()

        self.uploaded_files.append(self.get_s3_tab_preview_file_key())

        await S3Client().upload_fileobj(self.get_s3_tab_preview_file_key(), tab_file)

    async def upload_tab_thumbnail(self, tab_file: File) -> None:
        """
        Upload the thumbnail tab JPG to the s3 bucket and return true if successful.

        Throw IncorrectFileType exception if invalid file type.
        """
        if not tab_file.filename.lower().endswith(".jpg"):
            raise IncorrectFileType()

        self.uploaded_files.append(self.get_s3_tab_thumbnail_file_key())

        await S3Client().upload_fileobj(self.get_s3_tab_thumbnail_file_key(), tab_file)

    def rollback_uploads(self):
            """
            Delete current uploaded files from s3 bucket
            """
            for file_key in self.uploaded_files:
                if not S3Client().delete_object(file_key):
                    Logger.log(LogLevel.ERROR, f"Failed to delete {file_key} from s3 bucket in rollback.")
    
    def get_s3_tab_original_file_key(self) -> str:
        return  f"tabs/{self.artist}/{self.song_name}/{self.song_name}-{self.identifier}.pdf"

    def get_s3_tab_preview_file_key(self) -> str:
        return f"tabs/{self.artist}/{self.song_name}/{self.song_name}-{self.identifier}-preview.pdf"

    def get_s3_tab_thumbnail_file_key(self) -> str:
        return f"tabs/{self.artist}/{self.song_name}/{self.song_name}-{self.identifier}_page1.jpg"

    def get_file_name(self):
        return f"{self.song_name}.pdf"

    def get_identifier(self):
        return self.identifier

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

