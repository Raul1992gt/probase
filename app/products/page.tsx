"use client";

import { LayoutShell } from "@/ui/components/LayoutShell";
import { Card } from "@/ui/components/Card";
import { useUserPreferences } from "@/ui/hooks/useUserPreferences";
import { LEVELS, type LevelId } from "@/domain/models/level";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";

interface AffiliateProduct {
  id: string;
  name: string;
  description: string;
  url: string;
}

const getAffiliateProductsByLevel = (lvl: LevelId | null): AffiliateProduct[] => {
  if (!lvl) return [];

  switch (lvl) {
    case "beginner":
      return [
        {
          id: "amazon-beginner-palas",
          name: "Pala recomendada para principiantes",
          description:
            "Pala cómoda y controlable para empezar con buenas sensaciones.",
          url: "https://www.amazon.es/EVO-Speed-2025-Pala-Padel/dp/B0DNTTDKKB?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1QP966WPJMMR9&dib=eyJ2IjoiMSJ9.Bsr16DCRNOm_RGNvMoJie-ikt_p042RCBVTFD0UaAF_auEYezPQBkJDtgNusmqwtBdpLV4qNhyfhBAJNG0laHj2QjMOiXx4XtbzcAJ2fvx8xAnX3PH4XM6Ij6K7_WhqZNnWLeLzWBUKw7NPnO563Js1xaxKdCOqWmHRernkzfr8G1TMyTmNLBTb7FRiDHVCw8Cuk43NeKRGKNJrygg0NA31QmXLgjJWak3ahFTdmo0rYMhbYbAwB2ts2_rBADdjhwLjlFNJSuo5el_dPXWFX9YHST_kiK_WnwzXWwP8VY34.6UgcbelBrdyiuQaPMEMMYkxJStnhF0iS8j6FqJOoqzY&dib_tag=se&keywords=PALA%2BPADEL%2BPRINCIPIANTE&qid=1770121139&s=sports&sprefix=pala%2Bpadel%2Bprincipian%2Csporting%2C231&sr=1-6&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&th=1&linkCode=ll2&tag=probase05-21&linkId=fee60f923b2a7ff586d979b6f2c1eca0&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-beginner-zapatillas",
          name: "Zapatillas de pádel principiantes",
          description:
            "Calzado con buen agarre y soporte para evitar resbalones.",
          url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-beginner-accesorios",
          name: "Accesorios para entrenar mejor",
          description:
            "Muñequeras, grips y otros accesorios básicos para tus partidos.",
          url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
        },
      ];
    case "intermediate":
      return [
        {
          id: "amazon-intermediate-palas",
          name: "Pala recomendada nivel intermedio",
          description:
            "Pala equilibrada para mejorar tu juego y ganar regularidad.",
          url: "https://www.amazon.es/RYZE-Pala-Padel-Fibra-Carbono/dp/B0BGYLHF9N?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88%3Aamzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88&crid=1JKKYIX70GS6V&cv_ct_cx=pala+padel+intermedio&keywords=pala+padel+intermedio&pd_rd_i=B0BGYLHF9N&pd_rd_r=819cc7e5-7b0c-4030-a7fd-1f2cb890f703&pd_rd_w=UZ1Q8&pd_rd_wg=WT1FO&pf_rd_p=249ffb04-739a-47cc-acbc-fcda74febf88&pf_rd_r=RBFQ2PFAJW2KPQ8CK68Y&qid=1770122361&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pala+padel+intermedio%2Caps%2C237&sr=1-1-9ac51240-4b88-4e0c-aad1-ad3578b6cab1-spons&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&aref=goXMxpHG1D&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=probase05-21&linkId=1826abd38ff320fe4dfa04633eef17ef&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-intermediate-zapatillas",
          name: "Zapatillas de pádel intermedio",
          description:
            "Zapatillas estables y cómodas para entrenar y competir.",
          url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-intermediate-accesorios",
          name: "Accesorios para entrenar mejor",
          description:
            "Overgrips, pelotas y otros accesorios para tus sesiones habituales.",
          url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
        },
      ];
    case "advanced":
      return [
        {
          id: "amazon-advanced-palas",
          name: "Pala potencia nivel avanzado",
          description:
            "Pala potente para jugadores que compiten y buscan máxima pegada.",
          url: "https://www.amazon.es/Bullpadel-Neuron-25-Encordado-Plateado/dp/B0DHZL5ZFF?content-id=amzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88%3Aamzn1.sym.249ffb04-739a-47cc-acbc-fcda74febf88&crid=PILXRKH9KTPX&cv_ct_cx=pala+padel+hombre+profesional&keywords=pala+padel+hombre+profesional&pd_rd_i=B0DHZL5ZFF&pd_rd_r=93400d12-df65-4383-abbb-ec4dd3b98d0e&pd_rd_w=xkb0i&pd_rd_wg=C6bvp&pf_rd_p=249ffb04-739a-47cc-acbc-fcda74febf88&pf_rd_r=G1PM5ZC2CW32VHX1TF4T&qid=1770118813&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=pala+padel+hombre+pro%2Caps%2C248&sr=1-3-9ac51240-4b88-4e0c-aad1-ad3578b6cab1-spons&ufe=app_do%3Aamzn1.fos.4c3f56c3-e485-4a35-9abc-6532b61c3b62&aref=Acnb0tPCRI&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&psc=1&linkCode=ll2&tag=probase05-21&linkId=5a1b75dabc57016f6d949587efa7bfca&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-advanced-zapatillas",
          name: "Zapatillas de pádel avanzadas",
          description:
            "Calzado de alto rendimiento para partidos exigentes y torneos.",
          url: "https://www.amazon.es/ASICS-Padel-Sneaker-Hombre-Black/dp/B0F5BPR5SX?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=31N9FDR3T5TS7&dib=eyJ2IjoiMSJ9.AXVeZqUPDJSMYhQeAHutpalEwx3c5w4UFy_Z_HrRXWKRoZ7CJ5duiakNyEolBQip3BiOZf9_v_4NLAFUnzPsPSLXIshMZjV5mLMos-pB8EQGvwwUeP3MfRk-nb5RriwkikE6BKLEhMrak_91gtqL18ZMxzQB_rAJ-7DROe6HZcF8Wusg4Ev1NN5qeouUEFjHRcnImgqFqIYbPQBmrwJMihe_3tDwKX40X1s_WgbDHb4A2RNzlE8W9quKsGYu1mrT2TYgbK8Pi5Pwvl0R9YMWFleRsAYzoUZO1wG4GfPcqpo.8aqFvNUL3nHYUd1QVd200qqGFjMf3fwz6nTzE7M3F_s&dib_tag=se&keywords=zapatillas%2Bpadel%2Bprincipiantes&qid=1770121230&s=sports&sprefix=zapatillas%2Bpadel%2Bprincipante%2Csporting%2C236&sr=1-2&th=1&psc=1&linkCode=ll2&tag=probase05-21&linkId=1a353a3aad124d7fcba1f3d21d563a76&ref_=as_li_ss_tl",
        },
        {
          id: "amazon-advanced-fisico",
          name: "Material para trabajo físico",
          description:
            "Bandas, lastres y material para mejorar tu preparación física.",
          url: "https://www.amazon.es/s?k=ACCESORIOS+ENTRENO+PADEL&i=sporting&__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW3BSQ5R2TNB&sprefix=accesorios+entreno+pad%2Csporting%2C230&linkCode=ll2&tag=probase05-21&linkId=1e5a048a65704c1c4dad6abb957d3721&ref_=as_li_ss_tl",
        },
      ];
    default:
      return [];
  }
};

const OTHER_AFFILIATE_PRODUCTS: AffiliateProduct[] = [
  {
    id: "amazon-generic-paleteros",
    name: "Paleteros y mochilas de pádel",
    description: "Paleteros y mochilas para llevar todo tu material organizado.",
    url: "https://www.amazon.es/s?k=paletero+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-pelotas",
    name: "Pelotas de pádel para entrenar",
    description: "Botes de pelotas para que nunca te quedes sin bolas en pista.",
    url: "https://www.amazon.es/s?k=pelotas+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-overgrips",
    name: "Pack de overgrips de pádel",
    description: "Overgrips para mejorar el agarre de tu pala en cada partido.",
    url: "https://www.amazon.es/s?k=overgrip+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-ropa-hombre",
    name: "Ropa de pádel para hombre",
    description: "Camisetas y pantalones técnicos para jugar más cómodo.",
    url: "https://www.amazon.es/s?k=ropa+padel+hombre&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-ropa-mujer",
    name: "Ropa de pádel para mujer",
    description: "Faldas, mallas y camisetas técnicas para ellas.",
    url: "https://www.amazon.es/s?k=ropa+padel+mujer&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-munhequeras",
    name: "Muñequeras y coderas",
    description: "Protección extra para muñecas y codos en partidos intensos.",
    url: "https://www.amazon.es/s?k=munequera+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-protectores-pala",
    name: "Protectores y fundas para la pala",
    description: "Protectores de marco y fundas para cuidar tu pala.",
    url: "https://www.amazon.es/s?k=protector+pala+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
  {
    id: "amazon-generic-entrenamiento-fisico",
    name: "Material de entrenamiento físico",
    description: "Bandas elásticas, conos y material para mejorar tu físico.",
    url: "https://www.amazon.es/s?k=entrenamiento+fisico+padel&i=sporting&linkCode=ll2&tag=probase05-21&ref_=as_li_ss_tl",
  },
];

export default function ProductsPage() {
  const { levelId } = useUserPreferences();
  const activeLevel = LEVELS.find((l) => l.id === levelId);
  const levelProducts = getAffiliateProductsByLevel(levelId ?? null);

  const handleClickProduct = (id: string, url: string) => {
    trackEvent("product_clicked", { productId: id, location: "products_page" });
    // navegación la hace el enlace
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
        {levelProducts.length > 0 ? (
          levelProducts.map((product) => (
            <Card
              key={product.id}
              className="flex flex-col items-center gap-2 bg-white text-center"
            >
              <h2 className="text-sm font-semibold text-slate-900">
                {product.name}
              </h2>
              <p className="text-xs text-slate-600">{product.description}</p>
              <a
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => handleClickProduct(product.id, product.url)}
                className="mt-1 inline-block rounded-full bg-[#FF9F29] px-5 py-2 text-center text-[12px] font-bold uppercase tracking-wide text-white shadow-sm"
              >
                PRODUCTO RECOMENDADO
                <br />
                POR AMAZON
              </a>
            </Card>
          ))
        ) : (
          <p className="text-sm text-slate-600">
            Selecciona tu nivel para ver recomendaciones personalizadas.
          </p>
        )}
      </section>

      <section className="mt-6 grid gap-3">
        <h2 className="text-base font-semibold text-slate-900">
          Otros productos de Amazon
        </h2>
        {OTHER_AFFILIATE_PRODUCTS.map((product) => (
          <Card
            key={product.id}
            className="flex flex-col items-center gap-2 bg-white text-center"
          >
            <h3 className="text-sm font-semibold text-slate-900">
              {product.name}
            </h3>
            <p className="text-xs text-slate-600">{product.description}</p>
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClickProduct(product.id, product.url)}
              className="mt-1 inline-block rounded-full bg-[#FF9F29] px-5 py-2 text-center text-[12px] font-bold uppercase tracking-wide text-white shadow-sm"
            >
              VER PRODUCTOS EN AMAZON
            </a>
          </Card>
        ))}
      </section>
    </LayoutShell>
  );
}
