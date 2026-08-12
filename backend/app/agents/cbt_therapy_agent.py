"""
LangGraph Mental Health State Machine Agent
Features Crisis Risk Detection, Culturally-Aware CBT Workflows, and Emergency Helpline Escalation
"""
from typing import TypedDict
from langgraph.graph import StateGraph, END


class CounselingState(TypedDict):
    user_message: str
    is_crisis: bool
    risk_level: str
    detected_emotion: str
    cbt_response: str
    helpline_info: str
    language: str


def crisis_assessment_node(state: CounselingState) -> CounselingState:
    """Evaluate user input for suicidal ideation, self-harm, or high risk crisis triggers."""
    msg = state["user_message"].lower()
    crisis_keywords = ["suicide", "khatam kar", "marna", "die", "kill myself", "zindagi se tang"]
    
    if any(k in msg for k in crisis_keywords):
        state["is_crisis"] = True
        state["risk_level"] = "HIGH"
        state["helpline_info"] = "🚨 **Emergency Helpline:** Umang Pakistan Hotline: 0311-7786264 (Available 24/7)"
    else:
        state["is_crisis"] = False
        state["risk_level"] = "LOW"
        state["helpline_info"] = ""
    return state


def cbt_counseling_node(state: CounselingState) -> CounselingState:
    """Generate empathetic Cognitive Behavioral Therapy (CBT) response."""
    if state["is_crisis"]:
        state["cbt_response"] = (
            "آپ اکیلے نہیں ہیں۔ میں سمجھ سکتا ہوں کہ یہ وقت بہت مشکل ہے۔ "
            "براہ کرم فوراً مدد حاصل کریں۔ ہماری ہیلپ لائن 24/7 دستیاب ہے۔"
        )
    else:
        state["cbt_response"] = (
            "آپ کے احساسات بالکل جائز ہیں۔ کیا آپ مجھے اس صورتحال کے بارے میں تھوڑا اور بتا سکتے ہیں؟ "
            "ہم مل کر اس سوچ کو مثبت رخ دے سکتے ہیں۔"
        )
    return state


def build_counseling_workflow():
    workflow = StateGraph(CounselingState)
    
    workflow.add_node("crisis_assessment", crisis_assessment_node)
    workflow.add_node("cbt_counseling", cbt_counseling_node)

    workflow.set_entry_point("crisis_assessment")
    workflow.add_edge("crisis_assessment", "cbt_counseling")
    workflow.add_edge("cbt_counseling", END)

    return workflow.compile()


counseling_agent_graph = build_counseling_workflow()
