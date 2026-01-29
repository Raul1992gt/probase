import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Padel Tips",
    short_name: "PadelTips",
    description: "Consejos rápidos de pádel y productos según tu nivel.",
    start_url: "/",
    display: "standalone",
    background_color: "#f1f5f9",
    theme_color: "#22c55e",
    lang: "es-ES",
    icons: [
      {
        src: "/icon-512.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
