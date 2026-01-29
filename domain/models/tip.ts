import type { LevelId } from "@/domain/models/level";

export type TipCategory = "tecnico" | "lesiones" | "estrategia";

export interface Tip {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  category: TipCategory;
  level: LevelId;
  tags?: string[];
}
