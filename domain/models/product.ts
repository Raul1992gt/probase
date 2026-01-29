import type { LevelId } from "@/domain/models/level";

export type ProductAvailability = "store" | "amazon";

export interface Product {
  id: string;
  name: string;
  description: string;
  price?: string;
  link?: string; // Sólo se usará cuando availability sea "amazon"
  image?: string;
  level: LevelId;
  availability: ProductAvailability; // Distingue productos de tienda física vs Amazon
}
