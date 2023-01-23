export interface Topic {
  id: number;
  by: string;
  score: number;
  time: number;
  title: string;
  text: string;
  kids: number[];
  descendants: number;
  parent: number;
}
