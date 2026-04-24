import { useEffect, useRef, useState } from "react";
import { Bot, X, ArrowUp } from "lucide-react";

type Msg = { role: "user" | "ai"; text: string };

const WEBHOOK = "https://aula-n8n.riftvt.easypanel.host/webhook/4bb9b7c6-2c00-497d-98cb-c6683654a394";

function getChatId() {
  if (typeof window === "undefined") return "server";

  const k = "don_chat_id";
  let id = window.localStorage.getItem(k);
  if (!id) {
    id = crypto.randomUUID?.() ?? `${Math.random().toString(36).slice(2)}${Date.now()}`;
    window.localStorage.setItem(k, id);
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
      {/* Floating launcher */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full bg-[var(--red)] text-white flex items-center justify-center hover:bg-[var(--red-dark)] transition-all duration-500 animate-float-soft shadow-[0_20px_60px_-15px_rgba(200,22,29,0.6)] hover:scale-105"
        aria-label="Abrir chat"
        style={{ boxShadow: "0 20px 60px -15px rgba(200,22,29,0.55), 0 0 0 1px rgba(255,255,255,0.05)" }}
      >
        <span className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none" />
        {open ? <X size={22} /> : <Bot size={26} strokeWidth={1.5} />}
      </button>

      {open && (
        <div className="fixed bottom-28 right-8 z-50 w-[calc(100vw-4rem)] sm:w-[400px] h-[34rem] bg-[#0A0A0A] border border-line shadow-elegant flex flex-col overflow-hidden animate-slide-up">
          {/* Header */}
          <div className="px-5 py-5 flex items-center gap-3 border-b border-line bg-[#0C0C0C]">
            <div className="h-10 w-10 rounded-full bg-[#111111] border border-line flex items-center justify-center">
              <Bot size={18} strokeWidth={1.5} className="text-[var(--red)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display text-white text-lg leading-tight">Assistente Don</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white-muted mt-1 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--red)] animate-pulse" />
                Online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white-muted hover:text-white transition-colors"
              aria-label="Fechar"
            >
              <X size={16} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] px-4 py-3 text-sm leading-relaxed ${
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
                      className="h-1.5 w-1.5 bg-[var(--red)] inline-block rounded-full"
                      style={{ animation: `typing 1.2s infinite ${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t border-line p-3 flex gap-2 bg-[#0C0C0C] items-center"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem…"
              className="flex-1 bg-transparent border-0 px-3 py-2 text-sm focus:outline-none text-white placeholder:text-white-muted/60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-10 w-10 shrink-0 bg-[var(--red)] text-white flex items-center justify-center disabled:opacity-30 hover:bg-[var(--red-dark)] transition-colors rounded-full"
              aria-label="Enviar"
            >
              <ArrowUp size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
