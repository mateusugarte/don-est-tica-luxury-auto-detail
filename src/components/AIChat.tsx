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
    { role: "ai", text: "Olá! Sou o assistente Don. Como posso ajudar com seu veículo hoje?" },
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
        className="fixed bottom-6 right-6 z-50 h-16 w-16 rounded-full bg-gradient-primary text-primary-foreground shadow-glow flex items-center justify-center hover:scale-110 transition-transform animate-pulse-glow"
        aria-label="Abrir chat"
      >
        {open ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 h-[32rem] bg-card border border-border rounded-2xl shadow-elegant flex flex-col overflow-hidden animate-slide-up">
          <div className="bg-gradient-primary px-5 py-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-background/20 backdrop-blur flex items-center justify-center">
              <MessageCircle size={18} className="text-primary-foreground" />
            </div>
            <div>
              <p className="font-display text-primary-foreground text-base leading-tight">Assistente Don</p>
              <p className="text-[11px] text-primary-foreground/80">Online agora</p>
            </div>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3">
            {msgs.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                    m.role === "user"
                      ? "bg-gradient-primary text-primary-foreground rounded-br-sm"
                      : "bg-secondary text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-secondary px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="h-2 w-2 rounded-full bg-primary inline-block"
                      style={{ animation: `typing 1.2s infinite ${i * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => { e.preventDefault(); send(); }}
            className="border-t border-border p-3 flex gap-2 bg-card"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Digite sua mensagem..."
              className="flex-1 bg-background border border-border rounded-full px-4 py-2.5 text-sm focus:border-primary outline-none transition-colors"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="h-10 w-10 shrink-0 rounded-full bg-gradient-primary text-primary-foreground flex items-center justify-center disabled:opacity-50 hover:scale-110 transition-transform"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
