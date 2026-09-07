export const EXERCISE_REVISION = '2026-09-07-v2';
export type Attempt = { revision: string; total: number; correct: number; at: string; wrongIds: string[] };
export function parseReadProgress(value: string | null, validIds: string[]): string[] {
  try { const data: unknown = JSON.parse(value ?? '[]'); return Array.isArray(data) ? [...new Set(data.filter((id): id is string => typeof id === 'string' && validIds.includes(id)))] : []; } catch { return []; }
}
export function parseAttempt(value: string | null, expectedCount: number): Attempt | null {
  try {
    const data = JSON.parse(value ?? 'null');
    if (!data || data.revision !== EXERCISE_REVISION || data.total !== expectedCount || !Number.isInteger(data.correct) || data.correct < 0 || data.correct > data.total || !Array.isArray(data.wrongIds) || !data.wrongIds.every((id: unknown) => typeof id === 'string' && id.length > 0) || new Set(data.wrongIds).size !== data.wrongIds.length || data.wrongIds.length !== data.total - data.correct || typeof data.at !== 'string' || !Number.isFinite(Date.parse(data.at))) return null;
    return data as Attempt;
  } catch { return null; }
}
