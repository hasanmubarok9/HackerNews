export interface Topic {
  id: number;
  by: string;
  score: number;
  time: Date;
  title: string;
  text: string;
  kids: number[];
  descendants: number;
  parent: number;
}
