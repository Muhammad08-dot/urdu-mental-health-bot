"""
Mental Health Counseling & Conversation API Endpoints
"""
from fastapi import APIRouter
from pydantic import BaseModel
from app.agents.cbt_therapy_agent import counseling_agent_graph

router = APIRouter()


class ChatRequest(BaseModel):
    message: str
    language: str = "Urdu"


class ChatResponse(BaseModel):
    response: str
    is_crisis: bool
    risk_level: str
    helpline: str


@router.post("/chat", response_model=ChatResponse)
async def mental_health_counseling_chat(payload: ChatRequest):
    initial_state = {
        "user_message": payload.message,
        "is_crisis": False,
        "risk_level": "LOW",
        "detected_emotion": "Neutral",
        "cbt_response": "",
        "helpline_info": "",
        "language": payload.language
    }

    result = counseling_agent_graph.invoke(initial_state)

    return {
        "response": result["cbt_response"],
        "is_crisis": result["is_crisis"],
        "risk_level": result["risk_level"],
        "helpline": result["helpline_info"]
    }
