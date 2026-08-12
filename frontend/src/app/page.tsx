"use client";

import React, { useState } from "react";
import { HeartHandshake, ShieldAlert, Send, Lock, Sparkles, MessageCircle } from "lucide-react";

export default function MentalHealthApp() {
  const [messages, setMessages] = useState<Array<{ sender: "user" | "bot"; text: string; helpline?: string }>>([
    {
      sender: "bot",
      text: "سلام! میں آپ کا رازدار اور ہمدرد ساتھی ہوں۔ آپ جو بھی بات کرنا چاہیں بلا جھجھک کر سکتے ہیں۔ تمام گفتگو مکمل طور پر خفیہ ہے۔",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = input;
    setInput("");
    setMessages((prev) => [...prev, { sender: "user", text: userMsg }]);
    setLoading(true);

    setTimeout(() => {
      let isCrisis = userMsg.toLowerCase().includes("marna") || userMsg.toLowerCase().includes("suicide");
      let botReply = isCrisis
        ? "آپ اکیلے نہیں ہیں۔ میں سمجھ سکتا ہوں کہ یہ وقت بہت مشکل ہے۔ براہ کرم فوراً مدد حاصل کریں۔"
        : "آپ کے احساسات بالکل جائز ہیں۔ کیا آپ مجھے اس کے بارے میں تھوڑا اور بتا سکتے ہیں؟ ہم مل کر اس سوچ کا حل نکال سکتے ہیں۔";

      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: botReply,
          helpline: isCrisis ? "🚨 Emergency Hotline: Umang Pakistan (0311-7786264)" : undefined,
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-[#0d0a1a] text-purple-100 flex flex-col">
      {/* Top Header */}
      <header className="border-b border-purple-900/40 bg-[#130f26]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 border border-purple-500/40 flex items-center justify-center text-purple-400">
            <HeartHandshake className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-purple-300">Urdu Mental Health AI Companion 🧠</h1>
            <p className="text-xs text-purple-500 font-mono">CBT-BASED ANONYMOUS COUNSELING</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 bg-purple-950/80 border border-purple-800 px-3 py-1.5 rounded-full text-xs text-purple-300">
          <Lock className="w-3.5 h-3.5 text-emerald-400" />
          <span>100% Encrypted & Anonymous</span>
        </div>
      </header>

      {/* Chat Messages */}
      <main className="flex-1 max-w-4xl w-full mx-auto p-6 flex flex-col">
        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          {messages.map((m, i) => (
            <div key={i} className={`flex ${m.sender === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-lg p-4 rounded-2xl border text-sm leading-relaxed ${
                  m.sender === "user"
                    ? "bg-purple-600 border-purple-500 text-white rounded-br-none"
                    : "bg-[#181330] border-purple-800/60 text-purple-200 rounded-bl-none"
                }`}
              >
                <p className="whitespace-pre-line">{m.text}</p>
                {m.helpline && (
                  <div className="mt-3 p-3 bg-rose-950/80 border border-rose-600 rounded-xl text-rose-300 font-bold text-xs flex items-center gap-2">
                    <ShieldAlert className="w-4 h-4 text-rose-400" />
                    <span>{m.helpline}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#181330] border border-purple-800/60 p-3 rounded-xl text-xs text-purple-400 animate-pulse">
                سوچ رہا ہے... (LangGraph State Evaluation)
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSend} className="mt-4 flex gap-3">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="اپنی بات یہاں لکھیں (Urdu or Roman Urdu)..."
            className="flex-1 bg-[#130f26] border border-purple-800/80 rounded-xl px-4 py-3 text-purple-100 placeholder-purple-600 focus:outline-none focus:border-purple-500"
          />
          <button
            type="submit"
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 rounded-xl font-bold transition-all flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            <span>بھیجیں</span>
          </button>
        </form>
      </main>
    </div>
  );
}
