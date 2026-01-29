"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative border-b border-slate-200 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
            <Image
              src="/icon-512.png"
              alt="Consejos Pádel"
              width={28}
              height={28}
              className="rounded-full"
            />
            <span className="text-base font-semibold text-slate-900">
              Padel Tips
            </span>
          </Link>
          <nav className="flex items-center gap-4 text-sm text-slate-600">
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50"
            >
              <span className="sr-only">Abrir menú</span>
              <span className="flex flex-col gap-0.5">
                <span className="h-[2px] w-4 rounded-full bg-slate-700" />
                <span className="h-[2px] w-4 rounded-full bg-slate-700" />
                <span className="h-[2px] w-4 rounded-full bg-slate-700" />
              </span>
            </button>
          </nav>
        </div>
        {menuOpen && (
          <div className="absolute inset-x-0 top-full border-t border-slate-200 bg-white/95 shadow-sm">
            <div className="mx-auto flex max-w-4xl flex-col items-end px-4 py-2 text-right text-sm font-semibold text-slate-700">
              <Link
                href="/home"
                className="py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                Tips
              </Link>
              <Link
                href="/products"
                className="py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                Productos
              </Link>
              <Link
                href="/"
                className="py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                Cambiar nivel
              </Link>
            </div>
          </div>
        )}
      </header>
      <main className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
        {children}
      </main>
    </div>
  );
}
