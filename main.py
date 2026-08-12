"""
Root Execution Entrypoint for 🧠 Urdu & Roman Urdu Mental Health AI Companion
Runs FastAPI Uvicorn Server
"""
import uvicorn

if __name__ == "__main__":
    uvicorn.run("backend.app.main:app", host="0.0.0.0", port=8001, reload=True)
