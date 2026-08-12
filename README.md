# 🧠 Urdu & Roman Urdu Mental Health AI Companion

[![CI/CD Pipeline](https://github.com/Muhammad08-dot/urdu-mental-health-bot/actions/workflows/ci.yml/badge.svg)](https://github.com/Muhammad08-dot/urdu-mental-health-bot/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.11+](https://img.shields.io/badge/python-3.11+-blue.svg)](https://www.python.org/downloads/)
[![Next.js 15](https://img.shields.io/badge/Next.js-15-black.svg)](https://nextjs.org/)

Production-Grade Culturally Aware Mental Health Companion providing Cognitive Behavioral Therapy (CBT) conversation flows, Real-time Safety & Crisis Detection, Emotion Analysis, and Anonymous Counseling.

---

## 🏗️ System Architecture

```
                                +-------------------+
                                |   Next.js 15 UI   |
                                +---------+---------+
                                          |
                                    HTTPS / WebSockets
                                          |
                                +---------v---------+
                                |  FastAPI Gateway  |
                                +----+----+----+----+
                                     |    |    |
        +----------------------------+    |    +----------------------------+
        |                                 |                                 |
+-------v-------+                 +-------v-------+                 +-------v-------+
|  PostgreSQL   |                 | Qdrant Vector |                 | Redis Stream  |
| (Session DB)  |                 | (Therapy RAG) |                 | (State Cache) |
+---------------+                 +---------------+                 +---------------+
                                          |
                                +---------v---------+
                                | LangGraph Crisis  |
                                |  & CBT Workflow   |
                                +-------------------+
```

---

## 🚀 Quick Start

```bash
# 1. Clone repository
git clone https://github.com/Muhammad08-dot/urdu-mental-health-bot.git
cd urdu-mental-health-bot

# 2. Launch Development Stack
docker compose -f infrastructure/docker/docker-compose.dev.yml up --build
```
