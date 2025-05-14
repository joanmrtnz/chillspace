import moods from "@/data/moods.json";

export const allMoods = moods;

export type Mood = (typeof moods)[number];