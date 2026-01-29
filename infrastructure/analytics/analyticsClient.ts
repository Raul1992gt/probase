type AnalyticsEvent =
  | "level_selected"
  | "tip_viewed"
  | "product_clicked";

interface AnalyticsPayload {
  [key: string]: unknown;
}

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID;

export function trackEvent(event: AnalyticsEvent, payload?: AnalyticsPayload) {
  if (typeof window === "undefined") return;

  if (GA_MEASUREMENT_ID && (window as any).gtag) {
    (window as any).gtag("event", event, payload ?? {});
  } else {
    console.info("[analytics]", event, payload ?? {});
  }
}
