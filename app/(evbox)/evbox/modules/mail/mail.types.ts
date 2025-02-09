export interface Mail {
  id: string;
  provider: "gmail" | "outlook";
  title: string;
  description: string;
  createdAt: number;
}
