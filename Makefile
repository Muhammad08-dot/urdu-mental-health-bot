.PHONY: help build up down dev test lint clean

help:
	@echo "Urdu Mental Health AI Commands:"
	@echo "  make dev      - Start stack in dev mode with Docker Compose"
	@echo "  make build    - Build production container images"
	@echo "  make up       - Start production containers"
	@echo "  make down     - Stop containers"
	@echo "  make test     - Run pytest and frontend tests"

dev:
	docker compose -f infrastructure/docker/docker-compose.dev.yml up --build

build:
	docker compose -f infrastructure/docker/docker-compose.dev.yml build

up:
	docker compose -f infrastructure/docker/docker-compose.dev.yml up -d

down:
	docker compose -f infrastructure/docker/docker-compose.dev.yml down -v

test:
	cd backend && pytest tests/ -v
