export interface IStory {
  id: number;
  title: string;
  url: string;
  by: string;
  time: number;
  score: number;
  descendants: number;
  kids: number[];
}

export interface IComment {
  id: number;
  by: string;
  time: number;
  text: string;
  kids: number[];
  parent?: number;
  children?: IComment[];
}
