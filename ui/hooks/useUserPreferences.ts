"use client";

import { useEffect, useState } from "react";
import type { LevelId } from "@/domain/models/level";
import {
  loadUserPreferences,
  saveUserPreferences,
} from "@/infrastructure/storage/localStoragePreferences";
import { trackEvent } from "@/infrastructure/analytics/analyticsClient";

interface UseUserPreferencesResult {
  levelId: LevelId | null;
  setLevelId: (level: LevelId) => void;
  isLoaded: boolean;
}

export function useUserPreferences(): UseUserPreferencesResult {
  const [levelId, setLevelIdState] = useState<LevelId | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const stored = loadUserPreferences();
    if (stored?.levelId) {
      setLevelIdState(stored.levelId as LevelId);
    }
    setIsLoaded(true);
  }, []);

  const setLevelId = (level: LevelId) => {
    setLevelIdState(level);
    saveUserPreferences({ levelId: level });
    trackEvent("level_selected", { level });
  };

  return { levelId, setLevelId, isLoaded };
}
