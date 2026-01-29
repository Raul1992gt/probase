"use client";

import { useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { LayoutShell } from "@/ui/components/LayoutShell";
import { Card } from "@/ui/components/Card";
import { Button } from "@/ui/components/Button";
import { getTipById } from "@/infrastructure/repositories/mockTipsRepository";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";

export default function TipDetailPage() {
  const params = useParams<{ id: string }>();
  const router = useRouter();
  const tip = getTipById(params.id);

  useEffect(() => {
    if (tip) {
      trackEvent("tip_viewed", { tipId: tip.id });
    }
  }, [tip]);

  if (!tip) {
    return (
      <LayoutShell>
        <p className="text-sm text-slate-600">Tip no encontrado.</p>
      </LayoutShell>
    );
  }

  return (
    <LayoutShell>
      <Button
        variant="ghost"
        className="mb-3 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-medium text-slate-700 shadow-sm hover:bg-slate-100"
        onClick={() => router.back()}
      >
        <span className="text-base leading-none">←</span>
        <span>Volver</span>
      </Button>
      <Card>
        <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
          Tip de pádel
        </p>
        <h1 className="mt-1 text-xl font-semibold text-slate-900">{tip.title}</h1>
        <p className="mt-2 text-sm text-slate-700">{tip.content}</p>
      </Card>
    </LayoutShell>
  );
}
