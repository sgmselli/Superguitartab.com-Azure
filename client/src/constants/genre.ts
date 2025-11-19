export const Genres = {
    ROCK: "rock",
    JAZZ: "jazz",
    INDIE: "indie",
    INDIE_ROCK: "indie rock",
    POP: "pop",
    METAL: "metal",
    FOLK: "folk"
} as const;

export type Genre = (typeof Genres)[keyof typeof Genres];
