"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { LEVELS } from "@/domain/models/level";
import { LayoutShell } from "@/ui/components/LayoutShell";
import { useUserPreferences } from "@/ui/hooks/useUserPreferences";

export default function LevelSelectionPage() {
  const { setLevelId } = useUserPreferences();
  const router = useRouter();

  const handleSelectLevel = (id: (typeof LEVELS)[number]["id"]) => {
    setLevelId(id);
    router.push("/home");
  };

  return (
    <LayoutShell>
      <div className="flex min-h-[calc(100vh-96px)] flex-col gap-6 pb-4">
        <section className="flex flex-col gap-2 pt-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Bienvenido a Consejos Pádel
          </p>
          <h1 className="text-2xl font-semibold text-slate-900">
            Selecciona tu nivel de juego:
          </h1>
        </section>

        <section className="flex flex-col gap-3">
          <button
            type="button"
            onClick={() => handleSelectLevel("beginner")}
            className="w-full rounded-full bg-[#5FAB37] py-3 text-center text-base font-semibold text-white shadow-md hover:brightness-110"
          >
            Principiante
          </button>
          <button
            type="button"
            onClick={() => handleSelectLevel("intermediate")}
            className="w-full rounded-full bg-[#FF9F29] py-3 text-center text-base font-semibold text-white shadow-md hover:brightness-110"
          >
            Intermedio
          </button>
          <button
            type="button"
            onClick={() => handleSelectLevel("advanced")}
            className="w-full rounded-full bg-[#2B70D8] py-3 text-center text-base font-semibold text-white shadow-md hover:brightness-110"
          >
            Avanzado
          </button>
        </section>

        <section className="relative mt-auto h-40 overflow-hidden rounded-3xl bg-gradient-to-tr from-sky-100 via-sky-50 to-white">
          <div className="absolute inset-x-0 bottom-0 h-5 bg-[#2B70D8]" />
          <div className="absolute left-4 top-4 max-w-[70%] text-sm text-slate-700">
            <p className="font-bold">¿Qué obtendrás con esta app?</p>
            <p >Tips técnicos adaptados a tu nivel.</p>
            <p >Consejos para reducir el riesgo de lesiones.</p>
            <p >Recomendaciones de productos pensadas para tu juego.</p>
          </div>
          <div className="absolute -bottom-5 right-2 h-32 w-32 md:h-36 md:w-36">
            <Image
              src="/pala-padel.webp"
              alt="Pala de pádel"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </section>
      </div>
    </LayoutShell>
  );
}
