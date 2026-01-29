export type LevelId = "beginner" | "intermediate" | "advanced";

export interface Level {
  id: LevelId;
  label: string; // Texto mostrado al usuario (español)
  description: string;
  color: string; // Tailwind color token, p.ej. "beginner" -> verde
}

export const LEVELS: Level[] = [
  {
    id: "beginner",
    label: "Principiante",
    description: "Estás empezando o llevas muy poco tiempo jugando.",
    color: "beginner",
  },
  {
    id: "intermediate",
    label: "Intermedio",
    description: "Juegas con regularidad y conoces las reglas básicas.",
    color: "intermediate",
  },
  {
    id: "advanced",
    label: "Avanzado",
    description: "Compites o entrenas con frecuencia y tienes buen nivel.",
    color: "advanced",
  },
];
