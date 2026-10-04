export const journeyIds = ["discover", "explore", "apply", "prepare", "depart"] as const;
export type JourneyId = typeof journeyIds[number];

/** Five equal stages; the final 30% of each interval leads into the next. */
export function journeyState(progress: number) {
  const position = Math.max(0, Math.min(1, Number.isFinite(progress) ? progress : 0)) * 5;
  const index = Math.min(4, Math.floor(position));
  const mix = index === 4 ? 0 : Math.max(0, Math.min(1, (position - index - 0.7) / 0.3));
  return { index, next: Math.min(4, index + 1), mix, active: mix < 0.5 ? index : Math.min(4, index + 1) };
}
