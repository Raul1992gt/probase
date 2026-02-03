"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LayoutShell } from "@/ui/components/LayoutShell";
import { Card } from "@/ui/components/Card";
import { Button } from "@/ui/components/Button";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";
import { useUserPreferences } from "@/ui/hooks/useUserPreferences";
import { LEVELS, type LevelId } from "@/domain/models/level";
import { getTipsByLevel } from "@/infrastructure/repositories/mockTipsRepository";

export default function HomePage() {
  const { levelId, isLoaded } = useUserPreferences();
  const router = useRouter();

  if (isLoaded && !levelId) {
    router.push("/");
  }

  const tips = getTipsByLevel(levelId ?? null);
  const activeLevel = LEVELS.find((l) => l.id === levelId) ?? LEVELS[0];
  const PAGE_SIZE = 3;
  const [tipsPage, setTipsPage] = useState(0);
  const [selectedType, setSelectedType] = useState<string>("all");
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);

    const initialTipsPage = Number(params.get("tipsPage") ?? "0");
    if (!Number.isNaN(initialTipsPage) && initialTipsPage >= 0) {
      setTipsPage(initialTipsPage);
    }

    const initialType = params.get("type") ?? "all";
    const allowedTypes = [
      "all",
      "tecnico",
      "estrategia",
      "lesiones",
      "mental",
      "fisico",
      "saque",
      "pared",
    ];
    if (allowedTypes.includes(initialType)) {
      setSelectedType(initialType);
    }
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

  interface AffiliateProduct {
    id: string;
    name: string;
    description: string;
    url: string;
    image?: string;
  }

  const getAffiliateProductsByLevel = (lvl: LevelId | null): AffiliateProduct[] => {
    if (!lvl) return [];

    switch (lvl) {
      case "beginner":
        return [
          {
            id: "amazon-beginner-palas",
            name: "Palas para principiantes",
            description: "Selección de palas cómodas y controlables para empezar bien.",
            url: "https://www.amazon.es/EVO-Speed-2025-Pala-Padel/dp/B0DNTTDKKB?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QP966WPJMMR9&dib=eyJ2IjoiMSJ9.Bsr16DCRNOm_RGNvMoJie-ikt_p042RCBVTFD0UaAF_auEYezPQBkJDtgNusmqwtBdpLV4qNhyfhBAJNG0laHj2QjMOiXx4XtbzcAJ2fvx8xAnX3PH4XM6Ij6K7_WhqZNnWLeLzWBUKw7NPnO563Js1xaxKdCOqWmHRernkzfr8G1TMyTmNLBTb7FRiDHVCw8Cuk43NeKRGKNJrygg0NA31QmXLgjJWak3ahFTdmo0rYMhbYbAwB2ts2_rBADdjhwLjlFNJSuo5el_dPXWFX9YHST_kiK_WnwzXWwP8VY34.6UgcbelBrdyiuQaPMEMMYkxJStnhF0iS8j6FqJOoqzY&dib_tag=se&keywords=PALA%2BPADEL%2BPRINCIPIANTE&qid=1770121139&s=sports&sprefix=pala%2Bpadel%2Bprincipian%2Csporting%2C231&sr=1-6&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&th=1&linkCode=ll2&tag=probase05-21&linkId=fee60f923b2a7ff586d979b6f2c1eca0&ref_=as_li_ss_tl",
            image: "/pala-control-soft.jpg",
          },
          {
            id: "amazon-beginner-zapatillas",
            name: "Zapatillas de pádel principiantes",
            description: "Calzado con buen agarre y soporte para evitar resbalones.",
            url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
            image: "/zapatillas-padel.jpg",
          },
          {
            id: "amazon-beginner-accesorios",
            name: "Accesorios para entrenar mejor",
            description: "Muñequeras, grips y más accesorios básicos para tus partidos.",
            url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
            image: "/accesorios-padel.jpg",
          },
        ];
      case "intermediate":
        return [
          {
            id: "amazon-intermediate-palas",
            name: "Palas nivel intermedio",
            description: "Palas equilibradas para subir de nivel en tus partidos.",
            url: "https://www.amazon.es/RYZE-Pala-Padel-Fibra-Carbono/dp/B0BGYLHF9N?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88%3Aamzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88&crid=1JKKYIX70GS6V&cv_ct_cx=pala+padel+intermedio&keywords=pala+padel+intermedio&pd_rd_i=B0BGYLHF9N&pd_rd_r=819cc7e5-7b0c-4030-a7fd-1f2cb890f703&pd_rd_w=UZ1Q8&pd_rd_wg=WT1FO&pf_rd_p=249ffb04-739a-47cc-acbc-fcda74febf88&pf_rd_r=RBFQ2PFAJW2KPQ8CK68Y&qid=1770122361&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pala+padel+intermedio%2Caps%2C237&sr=1-1-9ac51240-4b88-4e0c-aad1-ad3578b6cab1-spons&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&aref=goXMxpHG1D&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=probase05-21&linkId=1826abd38ff320fe4dfa04633eef17ef&ref_=as_li_ss_tl",
            image: "/pala-equilibrada.jpg",
          },
          {
            id: "amazon-intermediate-zapatillas",
            name: "Zapatillas de pádel intermedio",
            description: "Zapatillas estables y cómodas para entrenar y competir.",
            url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
            image: "/zapatillas-padel.jpg",
          },
          {
            id: "amazon-intermediate-accesorios",
            name: "Accesorios para entrenar mejor",
            description: "Overgrips, pelotas y más para tus sesiones habituales.",
            url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
            image: "/accesorios-padel.jpg",
          },
        ];
      case "advanced":
        return [
          {
            id: "amazon-advanced-palas",
            name: "Palas avanzadas de alto rendimiento",
            description: "Modelos potentes para jugadores que compiten a menudo.",
            url: "https://www.amazon.es/Bullpadel-Neuron-25-Encordado-Plateado/dp/B0DHZL5ZFF?content-id=amzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88%3Aamzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88&crid=PILXRKH9KTPX&cv_ct_cx=pala+padel+hombre+profesional&keywords=pala+padel+hombre+profesional&pd_rd_i=B0DHZL5ZFF&pd_rd_r=93400d12-df65-4383-abbb-ec4dd3b98d0e&pd_rd_w=xkb0i&pd_rd_wg=C6bvp&pf_rd_p=249ffb04-739a-47cc-acbc-fcda74febf88&pf_rd_r=G1PM5ZC2CW32VHX1TF4T&qid=1770118813&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pala+padel+hombre+pro%2Caps%2C248&sr=1-3-9ac51240-4b88-4e0c-aad1-ad3578b6cab1-spons&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&aref=Acnb0tPCRI&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=probase05-21&linkId=5a1b75dabc57016f6d949587efa7bfca&ref_=as_li_ss_tl",
            image: "/pala-potencia.jpg",
          },
          {
            id: "amazon-advanced-zapatillas",
            name: "Zapatillas de pádel avanzadas",
            description: "Calzado de alto rendimiento para partidos exigentes.",
            url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
            image: "/zapatillas-padel.jpg",
          },
          {
            id: "amazon-advanced-fisico",
            name: "Material para trabajo físico",
            description: "Bandas, lastres y material para mejorar tu preparación física.",
            url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
            image: "/material-fisico.jpg",
          },
        ];
      default:
        return [];
    }
  };
  const affiliateProducts = getAffiliateProductsByLevel(levelId ?? null);

  const handleClickRecommendedProduct = (id: string, url: string) => {
    trackEvent("recommended_product_clicked", { productId: id, location: "home_recommended" });
    // navegación la hace el Link
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
                      const params = new URLSearchParams(window.location.search);
                      params.set("tipsPage", "0");
                      params.set("type", typeId);
                      router.push(`?${params.toString()}`);
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
                        router.push(
                          `/tips/${tip.id}?tipsPage=${tipsPage}&type=${selectedType}`,
                        )
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
                      const params = new URLSearchParams(window.location.search);
                      params.set("tipsPage", String(newPage));
                      params.set("type", selectedType);
                      router.push(`?${params.toString()}`);
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
        {affiliateProducts.map((product) => (
          <Link
            href={product.url}
            key={product.id}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => handleClickRecommendedProduct(product.id, product.url)}
          >
            <Card className="flex flex-col items-center gap-2 bg-white text-center">
              <p className="text-sm font-semibold text-slate-900">
                {product.name}
              </p>
              <p className="text-xs text-slate-600">{product.description}</p>
              <span className="mt-1 inline-block rounded-full bg-[#FF9F29] px-5 py-2 text-center text-[12px] font-bold uppercase tracking-wide text-white shadow-sm">
                PRODUCTO RECOMENDADO
                <br />
                POR AMAZON
              </span>
            </Card>
          </Link>
        ))}
      </section>
    </LayoutShell>
  );
}
