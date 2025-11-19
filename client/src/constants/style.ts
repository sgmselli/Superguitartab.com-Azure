export const Styles = {
    FINGER_PICKING: "finger picking",
    STRUMMING: "strumming",
} as const;

export type Style = (typeof Styles)[keyof typeof Styles];
