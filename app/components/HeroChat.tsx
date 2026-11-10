"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";

type Phase = "hidden" | "tagline" | "bar" | "chat";
type Message = { role: "user" | "assistant"; content: string };

const EASE = "cubic-bezier(0.22,1,0.36,1)";

export default function HeroChat() {
  const [phase, setPhase] = useState<Phase>("hidden");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);
  const [streaming, setStreaming] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("tagline"), 4500);
    const t2 = setTimeout(() => setPhase("bar"), 7500);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    if (phase === "bar") inputRef.current?.focus();
  }, [phase]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streaming]);

  async function send() {
    const text = input.trim();
    if (!text || streaming) return;

    const next: Message[] = [...messages, { role: "user", content: text }];
    setMessages(next);
    setInput("");
    setPhase("chat");
    setStreaming(true);

    setMessages((m) => [...m, { role: "assistant", content: "" }]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.body) throw new Error("No body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        setMessages((m) => {
          const copy = [...m];
          copy[copy.length - 1] = {
            role: "assistant",
            content: copy[copy.length - 1].content + chunk,
          };
          return copy;
        });
      }
    } catch {
      setMessages((m) => {
        const copy = [...m];
        copy[copy.length - 1] = { role: "assistant", content: "Sorry, something went wrong. Please try again or call us on 02 4296 0047." };
        return copy;
      });
    } finally {
      setStreaming(false);
    }
  }

  function onKey(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); }
  }

  /* ---- PHASE: hidden ---- */
  if (phase === "hidden") return null;

  /* ---- PHASE: tagline ---- */
  if (phase === "tagline") {
    return (
      <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{
          color: "#fff",
          fontFamily: "var(--font-sans), sans-serif",
          fontWeight: 700,
          fontSize: "clamp(28px, 4vw, 56px)",
          letterSpacing: "-0.02em",
          textAlign: "center",
          whiteSpace: "nowrap",
          opacity: 1,
          transform: "translateY(0)",
          transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
        }}>
          Project Marketing Specialist
        </p>
      </div>
    );
  }

  /* ---- PHASE: bar ---- */
  if (phase === "bar") {
    return (
      <div style={{ position: "absolute", inset: 0, zIndex: 3, display: "flex", alignItems: "center", justifyContent: "center", padding: "0 24px" }}>
        <div style={{
          width: "100%",
          maxWidth: 580,
          background: "#fff",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          padding: "0 8px 0 28px",
          height: 60,
          gap: 8,
          boxShadow: "0 8px 48px rgba(0,0,0,0.35)",
          animation: `barIn 0.6s ${EASE} forwards`,
        }}>
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask Spinelli AI anything…"
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 17,
              letterSpacing: "-0.01em",
              color: "#111",
            }}
          />
          <button
            onClick={send}
            aria-label="Send"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: "#000",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: `background 0.2s ${EASE}`,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#333")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#000")}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 15V3M9 3L4 8M9 3L14 8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    );
  }

  /* ---- PHASE: chat ---- */
  return (
    <div style={{
      position: "fixed",
      inset: 0,
      zIndex: 100,
      background: "rgba(0,0,0,0.92)",
      backdropFilter: "blur(12px)",
      display: "flex",
      flexDirection: "column",
      animation: `chatIn 0.5s ${EASE} forwards`,
    }}>
      {/* header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 24px",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="7" r="3" fill="#000"/>
              <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <p style={{ color: "#fff", fontWeight: 600, fontSize: 15, letterSpacing: "-0.01em", margin: 0 }}>Spinelli AI</p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 12, fontFamily: "var(--font-mono)", margin: 0 }}>Project Marketing Specialist</p>
          </div>
        </div>
        <button
          onClick={() => { setPhase("bar"); setMessages([]); }}
          style={{ background: "none", border: "none", color: "rgba(255,255,255,0.4)", cursor: "pointer", fontSize: 24, lineHeight: 1, padding: 4 }}
          aria-label="Close chat"
        >✕</button>
      </div>

      {/* messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "32px 0" }}>
        <div style={{ maxWidth: 720, margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: 24 }}>
          {messages.map((m, i) => (
            <div key={i} style={{
              display: "flex",
              flexDirection: m.role === "user" ? "row-reverse" : "row",
              gap: 12,
              alignItems: "flex-start",
            }}>
              {m.role === "assistant" && (
                <div style={{ width: 32, height: 32, borderRadius: "50%", background: "#fff", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 18 18" fill="none">
                    <circle cx="9" cy="7" r="3" fill="#000"/>
                    <path d="M3 15c0-3.314 2.686-6 6-6s6 2.686 6 6" stroke="#000" strokeWidth="1.6" strokeLinecap="round"/>
                  </svg>
                </div>
              )}
              <div style={{
                maxWidth: "78%",
                padding: m.role === "user" ? "12px 18px" : "16px 20px",
                borderRadius: m.role === "user" ? "20px 20px 4px 20px" : "20px 20px 20px 4px",
                background: m.role === "user" ? "#fff" : "rgba(255,255,255,0.07)",
                border: m.role === "assistant" ? "1px solid rgba(255,255,255,0.1)" : "none",
                color: m.role === "user" ? "#000" : "#fff",
                fontFamily: "var(--font-sans), sans-serif",
                fontSize: 15,
                lineHeight: 1.65,
                letterSpacing: "-0.005em",
                whiteSpace: "pre-wrap",
              }}>
                {m.content}
                {m.role === "assistant" && streaming && i === messages.length - 1 && (
                  <span style={{
                    display: "inline-block",
                    width: 2,
                    height: "1em",
                    background: "rgba(255,255,255,0.6)",
                    marginLeft: 2,
                    verticalAlign: "middle",
                    animation: "blink 0.9s step-end infinite",
                  }}/>
                )}
              </div>
            </div>
          ))}
          <div ref={chatEndRef} />
        </div>
      </div>

      {/* input bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "16px 24px",
        flexShrink: 0,
      }}>
        <div style={{
          maxWidth: 720,
          margin: "0 auto",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: 999,
          display: "flex",
          alignItems: "center",
          padding: "0 8px 0 24px",
          gap: 8,
          height: 56,
        }}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={onKey}
            placeholder="Ask a follow-up…"
            disabled={streaming}
            style={{
              flex: 1,
              border: "none",
              outline: "none",
              background: "transparent",
              fontFamily: "var(--font-sans), sans-serif",
              fontSize: 15,
              letterSpacing: "-0.01em",
              color: "#fff",
            }}
          />
          <button
            onClick={send}
            disabled={streaming || !input.trim()}
            aria-label="Send"
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              background: input.trim() && !streaming ? "#fff" : "rgba(255,255,255,0.15)",
              border: "none",
              cursor: input.trim() && !streaming ? "pointer" : "default",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              transition: `background 0.2s ${EASE}`,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path d="M9 15V3M9 3L4 8M9 3L14 8" stroke={input.trim() && !streaming ? "#000" : "rgba(255,255,255,0.4)"} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <p style={{ textAlign: "center", color: "rgba(255,255,255,0.2)", fontFamily: "var(--font-mono)", fontSize: 10, letterSpacing: "0.08em", marginTop: 10 }}>
          SPINELLI AI · FOR GENERAL GUIDANCE ONLY · CALL 02 4296 0047 FOR ADVICE
        </p>
      </div>
    </div>
  );
}
