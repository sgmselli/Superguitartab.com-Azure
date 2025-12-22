import { TabResponse } from "../../src/types/tab";
import { UserResponse } from "../../src/types/user";

export const wonderwallTab: TabResponse = {
  id: 2,
  song_name: "Wonderwall",
  artist: "Oasis",
  album: "(What's the Story) Morning Glory?",
  genre: "rock",
  style: "strumming",
  difficulty: "Beginner",
  description: "Released in 1995 on Oasis's landmark album '(What's the Story) Morning Glory?', 'Wonderwall' has become one of the most recognizable acoustic songs of the 1990s. Built around a steady strumming pattern in a capoed open position, it blends simple chord shapes with a rich, rhythmic groove that’s great for singalongs. The song is perfect for guitarists looking to develop timing, chord transitions, and dynamics while learning an enduring Britpop anthem.",
  lyrics_included: false,
  file_url: "tabs/oasis/wonderwall-351528e256.pdf",
  file_name: "wonderwall.pdf"
};

export const testUser: UserResponse = {
  id: 42,
  email: 'testuser@example.com',
  first_name: 'Test',
  last_name: 'User',
};

export const downloadedTabs = [
  {
    id: 1,
    song_name: 'Fast Car',
    artist: 'Tracy Chapman',
    album: 'Tracy Chapman',
    genre: 'folk',
    style: 'strumming',
    difficulty: 'Beginner',
    description: 'Classic',
    lyrics_included: true,
    file_url: 'tabs/fast-car.pdf',
    file_name: 'fast-car.pdf',
  },
  {
    id: 2,
    song_name: 'Wonderwall',
    artist: 'Oasis',
    album: "(What's the Story) Morning Glory?",
    genre: 'rock',
    style: 'strumming',
    difficulty: 'Beginner',
    description: 'Hit song',
    lyrics_included: false,
    file_url: 'tabs/wonderwall.pdf',
    file_name: 'wonderwall.pdf',
  },
];