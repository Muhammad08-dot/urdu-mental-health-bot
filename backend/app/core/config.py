"""
Pydantic v2 Settings for Mental Health AI Companion
"""
from typing import List
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    PROJECT_NAME: str = "Urdu Mental Health AI Companion"
    API_V1_STR: str = "/api/v1"
    ENVIRONMENT: str = "development"
    
    SECRET_KEY: str = "mental_health_secret_key_8877665544"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 60 * 24 * 7
    BACKEND_CORS_ORIGINS: List[str] = ["http://localhost:3000", "http://localhost:3001", "http://localhost:8001"]
    
    DATABASE_URL: str = "postgresql+asyncpg://mental_user:mental_secret_99@localhost:5433/mental_health_db"
    REDIS_URL: str = "redis://localhost:6380/0"
    QDRANT_URL: str = "http://localhost:6335"

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore"
    )


settings = Settings()
