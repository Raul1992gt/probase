import type { LevelId } from "@/domain/models/level";

export interface UserPreferences {
  levelId: LevelId | null;
}

export const defaultUserPreferences: UserPreferences = {
  levelId: null,
};
