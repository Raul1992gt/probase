"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LayoutShell } from "@/ui/components/LayoutShell";
import { Card } from "@/ui/components/Card";
import { Button } from "@/ui/components/Button";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";
import { useUserPreferences } from "@/ui/hooks/useUserPreferences";
import { LEVELS } from "@/domain/models/level";
import { getTipsByLevel } from "@/infrastructure/repositories/mockTipsRepository";
import { getProductsByLevel } from "@/infrastructure/repositories/mockProductsRepository";

export default function HomePage() {
  const { levelId, isLoaded } = useUserPreferences();
  const router = useRouter();

  if (isLoaded && !levelId) {
    router.push("/");
  }

  const tips = getTipsByLevel(levelId ?? null);
  const products = getProductsByLevel(levelId ?? null);
  const featuredProducts = products.slice(0, 2);
  const activeLevel = LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
  const PAGE_SIZE = 3;
  const [tipsPage, setTipsPage] = useState(0);
  const [selectedType, setSelectedType] = useState<string>("all");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const initialTipsPage = Number(params.get("tipsPage") ?? "0");
    if (Number.isNaN(initialTipsPage) || initialTipsPage < 0) return;
    setTipsPage(initialTipsPage);
  }, []);
  const filterByType = (typeId: string) => {
    if (typeId === "all") return tips;
    return tips.filter((tip) => {
      switch (typeId) {
        case "tecnico":
          return tip.category === "tecnico";
        case "estrategia":
          return tip.category === "estrategia";
        case "lesiones":
          return tip.category === "lesiones";
        case "mental":
          return tip.category === "mental";
        case "fisico":
          return tip.tags?.some((tag) =>
            [
              "fisico",
              "prehab",
              "recuperacion",
              "carga",
              "hidratacion",
              "calentamiento",
            ].includes(tag),
          );
        case "saque":
          return tip.tags?.includes("saque");
        case "pared":
          return tip.tags?.includes("pared");
        default:
          return true;
      }
    });
  };

  const filteredTips = filterByType(selectedType);
  const hasTips = filteredTips.length > 0;
  const totalPages = hasTips ? Math.ceil(filteredTips.length / PAGE_SIZE) : 0;
  const visibleTips = hasTips
    ? filteredTips.slice(tipsPage * PAGE_SIZE, tipsPage * PAGE_SIZE + PAGE_SIZE)
    : [];

  const handleClickRecommendedProduct = (id: string) => {
    trackEvent("recommended_product_clicked", { productId: id, location: "home_recommended" });
  };

  return (
    <LayoutShell>
      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-center">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
              Nivel
            </p>
            <h1 className="text-xl font-semibold text-slate-900">
              {activeLevel.label}
            </h1>
          </div>
        </div>

        <hr className="border-slate-200" />

        <div className="flex flex-col gap-2">
          <h2 className="text-base font-semibold text-slate-900">
            Tips para tu juego
          </h2>

          <div className="flex flex-wrap gap-2 text-xs font-semibold">
            {["all", "tecnico", "estrategia", "lesiones", "mental", "fisico", "saque", "pared"].map(
              (typeId) => {
                const labelMap: Record<string, string> = {
                  all: "Todos",
                  tecnico: "Técnico",
                  estrategia: "Estrategia",
                  lesiones: "Lesiones / Prevención",
                  mental: "Mental",
                  fisico: "Físico",
                  saque: "Saque",
                  pared: "Juego de pared",
                };
                const isActive = selectedType === typeId;
                return (
                  <button
                    key={typeId}
                    type="button"
                    onClick={() => {
                      setSelectedType(typeId);
                      setTipsPage(0);
                      router.push("?tipsPage=0");
                    }}
                    className={`rounded-full border px-3 py-1 transition ${
                      isActive
                        ? "border-[#2B70D8] bg-[#2B70D8] text-white"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                 >
                    {labelMap[typeId]}
                  </button>
                );
              },
            )}
          </div>

          {hasTips ? (
            <div className="flex flex-col gap-2">
              {visibleTips.map((tip) => (
                <Card key={tip.id} className="bg-white">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-sm font-semibold text-slate-900">
                        {tip.title}
                      </h3>
                      <span className="whitespace-nowrap rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-700">
                        {tip.category === "lesiones"
                          ? "Prevención"
                          : tip.category === "estrategia"
                          ? "Estrategia"
                          : tip.category === "mental"
                          ? "Mental"
                          : "Técnico"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{tip.shortDescription}</p>
                    <button
                      type="button"
                      onClick={() =>
                        router.push(`/tips/${tip.id}?tipsPage=${tipsPage}`)
                      }
                      className="mt-1 inline-flex items-center gap-1 self-start rounded-full bg-[#2B70D8] px-3 py-1 text-[11px] font-semibold text-white shadow-sm hover:bg-[#235ab0]"
                    >
                      <span>Ver tip completo</span>
                      <span className="text-xs">→</span>
                    </button>
                  </div>
                </Card>
              ))}
              {totalPages > 1 && (
                <div className="mt-1 flex flex-col gap-1">
                  <p className="text-center text-[11px] text-slate-500">
                    Página {tipsPage + 1} de {totalPages}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-[#2B70D8] hover:bg-[#235ab0]"
                    onClick={() => {
                      if (!totalPages) return;
                      const next = tipsPage + 1;
                      const newPage = next >= totalPages ? 0 : next;
                      setTipsPage(newPage);
                      router.push(`?tipsPage=${newPage}`);
                    }}
                  >
                    Siguientes tips →
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <p className="text-sm text-slate-600">
              Aún no hay tips configurados para este nivel.
            </p>
          )}
        </div>
      </section>

      <section className="mt-4 flex flex-col gap-3">
        <h2 className="text-base font-semibold text-slate-900">
          Productos Recomendados
        </h2>
        <p className="text-xs text-slate-600">
          Recomendados para tu nivel
        </p>
        {featuredProducts.map((product) => (
          <Link
            href="/products"
            key={product.id}
            onClick={() => handleClickRecommendedProduct(product.id)}
          >
            <Card className="flex items-center gap-3 bg-white">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={product.image || "/pala-control-soft.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-slate-900">
                  {product.name}
                </p>
                {product.price && (
                  <p className="text-xs text-slate-600">{product.price}</p>
                )}
                {product.availability === "amazon" ? (
                  <span className="mt-1 inline-flex rounded-full bg-[#2B70D8] px-3 py-1 text-[11px] font-semibold text-white">
                    Comprar en Amazon
                  </span>
                ) : (
                  <span className="mt-1 inline-flex rounded-full bg-[#FF9F29] px-3 py-1 text-[11px] font-semibold text-white">
                    Disponible en tienda
                  </span>
                )}
              </div>
            </Card>
          </Link>
        ))}
      </section>
    </LayoutShell>
  );
}
