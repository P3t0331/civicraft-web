"use client";

import { useState } from "react";
import { MaintenanceLoginModal } from "@/components/MaintenanceLoginModal";
import { motion } from "framer-motion";

export default function MaintenancePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-[#0a0f1c] overflow-hidden text-slate-200">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] opacity-50 pointer-events-none" />

      <main className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          {/* Icon */}
          <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-slate-900/50 border border-white/5 backdrop-blur-md shadow-2xl relative">
            <div className="absolute inset-0 rounded-3xl border border-amber-500/20" />
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
          </div>

          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
            Server je ve vývoji
          </h1>
          
          <p className="mb-10 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
            Server je aktuálně ve vývoji a děláme vše pro to, aby byl spuštěn co nejdříve. 
            Děkujeme za vaši trpělivost!
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <button
              onClick={() => window.location.reload()}
              className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all font-semibold shadow-lg backdrop-blur-md"
            >
              Obnovit stránku
            </button>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 rounded-xl text-amber-400 bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/20 hover:border-amber-500/30 transition-all font-semibold shadow-lg backdrop-blur-md"
            >
              Přístup pro tým
            </button>
          </div>
        </motion.div>
      </main>

      {/* Footer info */}
      <div className="absolute bottom-6 left-0 right-0 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Civicraft. All rights reserved.
      </div>

      {isModalOpen && <MaintenanceLoginModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
