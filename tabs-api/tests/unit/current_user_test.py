import pytest
from fastapi import HTTPException, status

from jose import JWTError

from app.utils.auth import current_user
from app.exceptions.user import UserIdDoesNotExist

@pytest.mark.asyncio
async def test_get_current_user_or_raise_http_error_returns_user(fake_user, monkeypatch):
    user = fake_user()

    monkeypatch.setattr(
        current_user,
        "decode_access_token",
        lambda token: {"sub": user.id},
    )

    async def mock_get_user_by_id(user_id, session):
        return user

    monkeypatch.setattr(current_user, "get_user_by_id", mock_get_user_by_id)

    result = await current_user.get_current_user_or_raise_http_error(access_token="token", session=None)
    assert result is user


@pytest.mark.asyncio
async def test_get_current_user_or_raise_http_error_missing_token_raises(monkeypatch):
    with pytest.raises(HTTPException) as excinfo:
        await current_user.get_current_user_or_raise_http_error(access_token=None, session=None)

    assert excinfo.value.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.asyncio
async def test_get_current_user_or_raise_http_error_invalid_token_raises(monkeypatch):
    def raise_jwt_error(token):
        raise JWTError("invalid")

    monkeypatch.setattr(current_user, "decode_access_token", raise_jwt_error)

    with pytest.raises(HTTPException) as excinfo:
        await current_user.get_current_user_or_raise_http_error(access_token="bad", session=None)

    assert excinfo.value.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.asyncio
async def test_get_current_user_or_raise_http_error_missing_sub_raises(monkeypatch):
    monkeypatch.setattr(
        current_user,
        "decode_access_token",
        lambda token: {},
    )

    with pytest.raises(HTTPException) as excinfo:
        await current_user.get_current_user_or_raise_http_error(access_token="no-sub", session=None)

    assert excinfo.value.status_code == status.HTTP_401_UNAUTHORIZED


@pytest.mark.asyncio
async def test_get_current_user_or_raise_http_error_unknown_user_raises(monkeypatch):
    monkeypatch.setattr(
        current_user,
        "decode_access_token",
        lambda token: {"sub": 99},
    )

    async def mock_get_user_by_id(user_id, session):
        raise UserIdDoesNotExist(user_id)

    monkeypatch.setattr(current_user, "get_user_by_id", mock_get_user_by_id)

    with pytest.raises(HTTPException) as excinfo:
        await current_user.get_current_user_or_raise_http_error(access_token="token", session=None)

    assert excinfo.value.status_code == status.HTTP_404_NOT_FOUND


@pytest.mark.asyncio
async def test_get_current_user_or_returns_none_returns_none_when_no_access_token():
    result = await current_user.get_current_user_or_return_none(
        access_token=None,
        session=None,
    )

    assert result is None

@pytest.mark.asyncio
async def test_get_current_user_or_returns_none_returns_none_when_jwt_invalid(monkeypatch):
    def mock_decode(_):
        raise JWTError("invalid token")

    monkeypatch.setattr(
        current_user,
        "decode_access_token",
        mock_decode,
    )

    result = await current_user.get_current_user_or_return_none(
        access_token="bad-token",
        session=None,
    )

    assert result is None

@pytest.mark.asyncio
async def test_get_current_user_or_returns_none_returns_user(fake_user, monkeypatch):
    user = fake_user()

    monkeypatch.setattr(
        current_user,
        "decode_access_token",
        lambda token: {"sub": user.id},
    )

    async def mock_get_user_by_id(user_id, session):
        return user

    monkeypatch.setattr(current_user, "get_user_by_id", mock_get_user_by_id)

    result = await current_user.get_current_user_or_return_none(access_token="token", session=None)
    assert result is user
