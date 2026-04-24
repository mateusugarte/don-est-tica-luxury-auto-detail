import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const WEBHOOK = "https://aula-n8n.riftvt.easypanel.host/webhook/4bb9b7c6-2c00-497d-98cb-c6683654a394";

function getChatId() {
  const k = "don_chat_id";
  let id = localStorage.getItem(k);
  if (!id) {
    id = (crypto.randomUUID?.() ?? Math.random().toString(36).slice(2) + Date.now());
    localStorage.setItem(k, id);
  }
  return id;
}

export function AIChat() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: "Olá. Sou o assistente Don. Como posso ajudar com seu veículo?" },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [msgs, loading, open]);

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setMsgs((m) => [...m, { role: "user", text }]);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: getChatId(), human_message: text }),
      });
      const ct = res.headers.get("content-type") || "";
      let reply = "";
      if (ct.includes("application/json")) {
        const data = await res.json();
        reply = data.output ?? data.reply ?? data.message ?? data.response ?? data.text ?? JSON.stringify(data);
      } else {
        reply = await res.text();
      }
      setMsgs((m) => [...m, { role: "ai", text: reply || "Desculpe, não obtive uma resposta." }]);
    } catch {
      setMsgs((m) => [...m, { role: "ai", text: "Ops, houve um erro de conexão. Tente novamente." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 h-12 w-12 bg-[var(--red)] text-white flex items-center justify-center hover:bg-[var(--red-dark)] transition-colors animate-pulse-glow"
        aria-label="Abrir chat"
      >
        {open ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-[#0C0C0C] border border-line shadow-elegant flex flex-col overflow-hidden animate-slide-up">
          <div className="px-5 py-4 flex items-center gap-3 border-b border-line">
            <div className="h-2 w-2 bg-[var(--red)]" />
            <div className="flex-1">
              <p className="font-display text-white text-base leading-tight">Assistente Don</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white-muted mt-0.5">Online</p>
            </div>
            <button onClick={() => setOpen(false)} className="text-white-muted hover:text-white transition-colors">
              <X size={16} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[82%] px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-[var(--red)] text-white"
                      : "bg-[#111111] text-white border border-line"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#111111] border border-line px-4 py-3 flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-1.5 w-1.5 bg-[var(--red)] inline-block"
                      style={{ animation: `typing 1.2s infinite ${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-line p-3 flex gap-2 bg-[#0C0C0C]"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem…"
              className="flex-1 bg-transparent border-0 px-2 py-2 text-sm focus:outline-none text-white placeholder:text-white-muted/60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-9 w-9 shrink-0 bg-[var(--red)] text-white flex items-center justify-center disabled:opacity-40 hover:bg-[var(--red-dark)] transition-colors"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
