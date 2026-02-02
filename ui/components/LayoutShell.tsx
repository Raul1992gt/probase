"use client";

import { useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";

interface LayoutShellProps {
  children: ReactNode;
}

export function LayoutShell({ children }: LayoutShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any | null>(null);
  const [canInstall, setCanInstall] = useState(false);
  const [usesCount, setUsesCount] = useState(0);
  const [isIos, setIsIos] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      setDeferredPrompt(event as any);
      setCanInstall(true);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Detectar iOS (iPhone/iPad) para mostrar un mensaje alternativo de instalación
    const ua = window.navigator.userAgent || window.navigator.vendor;
    const isIosDevice = /iPhone|iPad|iPod/i.test(ua);
    setIsIos(isIosDevice);

    // Contabilizar usos de la app para mostrar CTA tras varios usos
    try {
      const current = Number(window.localStorage.getItem("app_uses") ?? "0");
      const next = Number.isNaN(current) ? 1 : current + 1;
      window.localStorage.setItem("app_uses", String(next));
      setUsesCount(next);
    } catch {
      // ignore localStorage errors
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt,
      );
    };
  }, []);

  const showInstallCta = canInstall && usesCount >= 3;
  const showIosInstallHint = !showInstallCta && isIos && usesCount >= 3;

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    trackEvent("app_install_clicked", { location: "header_or_menu" });

    await (deferredPrompt as any).prompt();
    const choiceResult = await (deferredPrompt as any).userChoice;

    if (choiceResult.outcome === "accepted") {
      setCanInstall(false);
    }
    setDeferredPrompt(null);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="relative border-b border-slate-200 bg-white/70 backdrop-blur-sm">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <Link
            href="/?forceLevelSelection=1"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
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
            {showInstallCta && (
              <button
                type="button"
                className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-semibold text-white shadow-sm hover:bg-emerald-700"
                onClick={handleInstallClick}
              >
                ¿Te mola la app? 👉 Instálala
              </button>
            )}
            {showIosInstallHint && (
              <span className="hidden text-[11px] font-medium text-emerald-700 sm:inline">
                En iPhone: botón compartir → "Añadir a pantalla de inicio"
              </span>
            )}
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
              {showInstallCta && (
                <button
                  type="button"
                  className="py-1.5 text-slate-900"
                  onClick={() => {
                    handleInstallClick();
                    setMenuOpen(false);
                  }}
                >
                  ¿Te mola la app? 👉 Instálala
                </button>
              )}
              <Link
                href="/?forceLevelSelection=1"
                className="py-1.5"
                onClick={() => setMenuOpen(false)}
              >
                Cambiar nivel
              </Link>
              {showIosInstallHint && (
                <p className="py-1.5 text-[11px] font-medium text-emerald-700">
                  En iPhone: abre en Safari y usa "Compartir" → "Añadir a pantalla de inicio"
                </p>
              )}
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
                onClick={() => {
                  trackEvent("products_menu_clicked", { location: "header_menu" });
                  setMenuOpen(false);
                }}
              >
                Productos
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
