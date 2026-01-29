"use client";

import Image from "next/image";
import Link from "next/link";
import { LayoutShell } from "@/ui/components/LayoutShell";
import { Card } from "@/ui/components/Card";
import { useUserPreferences } from "@/ui/hooks/useUserPreferences";
import { LEVELS } from "@/domain/models/level";
import { getProductsByLevel } from "@/infrastructure/repositories/mockProductsRepository";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";

export default function ProductsPage() {
  const { levelId } = useUserPreferences();
  const productsForLevel = getProductsByLevel(levelId ?? null);
  const allProducts = getProductsByLevel(null);
  const otherProducts = levelId
    ? allProducts.filter(
        (p) => !productsForLevel.some((pl) => pl.id === p.id),
      )
    : [];
  const activeLevel = LEVELS.find((l) => l.id === levelId);

  const handleClickProduct = (id: string) => {
    trackEvent("product_clicked", { productId: id });
  };

  return (
    <LayoutShell>
      <section className="flex flex-col gap-2">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Recomendaciones
        </p>
        <h1 className="text-2xl font-semibold text-slate-900">
          Productos para tu juego
        </h1>
        {activeLevel && (
          <p className="text-sm text-slate-600">
            Basado en tu nivel: <span className="font-medium">{activeLevel.label}</span>
          </p>
        )}
      </section>

      <section className="grid gap-3">
        {productsForLevel.map((product) => (
          <Card key={product.id} className="flex items-center gap-3 bg-white">
            <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
              <Image
                src={product.image || "/pala-control-soft.jpg"}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-sm font-semibold text-slate-900">
                {product.name}
              </h2>
              <p className="text-xs text-slate-600">{product.description}</p>
              {product.price && (
                <p className="mt-1 text-xs font-semibold text-slate-900">
                  {product.price}
                </p>
              )}
              {product.availability === "amazon" && product.link ? (
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleClickProduct(product.id)}
                  className="mt-2 inline-flex items-center justify-center rounded-full bg-[#146eb4] px-3 py-1 text-[11px] font-semibold text-white hover:brightness-110"
                >
                  Comprar en Amazon
                </a>
              ) : (
                <span className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FF9F29] px-3 py-1 text-[11px] font-semibold text-white">
                  Disponible en tienda
                </span>
              )}
            </div>
          </Card>
        ))}
        {!productsForLevel.length && (
          <p className="text-sm text-slate-600">
            No hay productos configurados todavía.
          </p>
        )}
      </section>

      {levelId && otherProducts.length > 0 && (
        <section className="mt-6 grid gap-3">
          <h2 className="text-base font-semibold text-slate-900">
            Otros productos
          </h2>
          {otherProducts.map((product) => (
            <Card key={product.id} className="flex items-center gap-3 bg-white">
              <div className="relative h-16 w-16 overflow-hidden rounded-xl bg-slate-100">
                <Image
                  src={product.image || "/pala-control-soft.jpg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-sm font-semibold text-slate-900">
                  {product.name}
                </h2>
                <p className="text-xs text-slate-600">{product.description}</p>
                {product.price && (
                  <p className="mt-1 text-xs font-semibold text-slate-900">
                    {product.price}
                  </p>
                )}
                {product.availability === "amazon" && product.link ? (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleClickProduct(product.id)}
                    className="mt-2 inline-flex items-center justify-center rounded-full bg-[#146eb4] px-3 py-1 text-[11px] font-semibold text-white hover:brightness-110"
                  >
                    Comprar en Amazon
                  </a>
                ) : (
                  <span className="mt-2 inline-flex items-center justify-center rounded-full bg-[#FF9F29] px-3 py-1 text-[11px] font-semibold text-white">
                    Disponible en tienda
                  </span>
                )}
              </div>
            </Card>
          ))}
        </section>
      )}
    </LayoutShell>
  );
}
