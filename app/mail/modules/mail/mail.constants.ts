import { Mail } from "./mail.types";

export const mailList: Mail[] = [
  {
    id: crypto.randomUUID(),
    provider: "gmail",
    title: "Getting around with the 👋e0 Menu",
    description: "The e0 Team - Welcome to the club",
    createdAt: Date.now(),
  },
  {
    id: crypto.randomUUID(),
    provider: "outlook",
    title: "Getting around with the 👋e0 Menu",
    description: "The e0 Team - Welcome to the club",
    createdAt: Date.now(),
  },
];
