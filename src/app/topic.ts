export interface Topic {
  id: number;
  by: string;
  score: number;
  time: Date;
  title: string;
  descendants: number;
}
