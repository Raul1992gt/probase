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
import { getTipsByLevelPaginated } from "@/infrastructure/repositories/mockTipsRepository";
import { getProductsByLevel } from "@/infrastructure/repositories/mockProductsRepository";

export default function HomePage() {
  const { levelId, isLoaded } = useUserPreferences();
  const router = useRouter();

  if (isLoaded && !levelId) {
    router.push("/");
  }

  const products = getProductsByLevel(levelId ?? null);
  const featuredProducts = products.slice(0, 2);
  const activeLevel = LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
  const PAGE_SIZE = 3;
  const [tipsPage, setTipsPage] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const initialTipsPage = Number(params.get("tipsPage") ?? "0");
    if (Number.isNaN(initialTipsPage) || initialTipsPage < 0) return;
    setTipsPage(initialTipsPage);
  }, []);
  const paginatedTips = getTipsByLevelPaginated(levelId ?? null, tipsPage + 1, PAGE_SIZE);
  const hasTips = paginatedTips.total > 0;
  const visibleTips = hasTips ? paginatedTips.items : [];

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
                        {tip.category === "lesiones" ? "Prevención" : "Técnico"}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700">{tip.shortDescription}</p>
                    <button
                      type="button"
                      onClick={() =>
                        router.push(`/tips/${tip.id}?tipsPage=${tipsPage}`)
                      }
                      className="self-start text-xs font-semibold text-[#2B70D8] hover:underline"
                    >
                      Leer más
                    </button>
                  </div>
                </Card>
              ))}
              {paginatedTips.totalPages > 1 && (
                <div className="mt-1 flex flex-col gap-1">
                  <p className="text-center text-[11px] text-slate-500">
                    Página {tipsPage + 1} de {paginatedTips.totalPages}
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-[#2B70D8] hover:bg-[#235ab0]"
                    onClick={() => {
                      if (!paginatedTips.totalPages) return;
                      const next = tipsPage + 1;
                      const newPage =
                        next >= paginatedTips.totalPages ? 0 : next;
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
