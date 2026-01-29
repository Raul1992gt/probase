import type { Product } from "@/domain/models/product";

export const mockProducts: Product[] = [
  {
    id: "racket-beginner-1",
    name: "Pala Control Soft",
    description: "Pala ligera y manejable para tus primeros partidos.",
    price: "89,99 €",
    image: "/pala-control-soft.jpg",
    level: "beginner",
    availability: "store",
  },
  {
    id: "shoes-intermediate-1",
    name: "Zapatillas agarre intermedio",
    description:
      "Buen agarre y amortiguación para jugar 2-3 veces por semana.",
    price: "79€",
    image: "/zapatillas-padel.webp",
    level: "intermediate",
    availability: "store",
  },
  {
    id: "racket-advanced-1",
    name: "Pala potencia avanzado",
    description: "Pala con balance alto para jugadores ofensivos.",
    price: "189€",
    image: "",
    level: "advanced",
    availability: "store",
  },
  {
    id: "wristband-pro-1",
    name: "Muñequeras Padel Pro",
    description:
      "Mayor sujeción y protección para la muñeca en partidos intensos.",
    price: "9,99 €",
    image: "/munequera-padel.png",
    level: "intermediate",
    availability: "store", // En el futuro podrás usar "amazon" y añadir link
  },
];

export function getProductsByLevel(levelId: string | null): Product[] {
  if (!levelId) return mockProducts;
  return mockProducts.filter((product) => product.level === levelId);
}
