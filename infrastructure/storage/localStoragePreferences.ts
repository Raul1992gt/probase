import type { UserPreferences } from "@/domain/models/userProfile";

const STORAGE_KEY = "padel-tips-user-preferences";

function isBrowser() {
  return typeof window !== "undefined";
}

export function loadUserPreferences(): UserPreferences | null {
  if (!isBrowser()) return null;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as UserPreferences;
  } catch {
    return null;
  }
}

export function saveUserPreferences(preferences: UserPreferences) {
  if (!isBrowser()) return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
  } catch {
    // Ignorar errores de almacenamiento
  }
}
