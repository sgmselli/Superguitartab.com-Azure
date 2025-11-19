export const DifficultyLevels = {
    BEGINNER: "Beginner",
    INTERMEDIATE: "Intermediate",
    ADVANCED: "Advanced",
} as const;

export type DifficultyLevel = (typeof DifficultyLevels)[keyof typeof DifficultyLevels];
