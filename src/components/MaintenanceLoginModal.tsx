"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export function MaintenanceLoginModal({ onClose }: { onClose: () => void }) {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/maintenance/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (data.success) {
        // Refresh the page so middleware lets us through
        router.refresh();
        // Fallback if router.refresh doesn't do it instantly
        window.location.reload();
      } else {
        setError(data.error || "Nesprávné heslo");
      }
    } catch (err) {
      setError("Nastala chyba. Zkuste to prosím znovu.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-slate-900 p-8 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>
        
        <h2 className="text-2xl font-bold text-white mb-2">Přístup pro tým</h2>
        <p className="text-white/70 mb-6 text-sm">Zadejte heslo pro přístup na stránku.</p>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <input
              type="password"
              placeholder="Heslo"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-white placeholder-white/40 focus:border-amber-400/50 focus:outline-none focus:ring-1 focus:ring-amber-400/50"
              autoFocus
            />
          </div>
          
          {error && <p className="text-red-400 text-sm">{error}</p>}
          
          <button
            type="submit"
            disabled={loading || !password}
            className="mt-2 w-full rounded-xl bg-amber-500 py-3 font-semibold text-slate-950 transition-colors hover:bg-amber-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Ověřování..." : "Vstoupit"}
          </button>
        </form>
      </div>
    </div>
  );
}
