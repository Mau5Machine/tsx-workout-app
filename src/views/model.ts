export interface Todo {
  id: number;
  todo: string;
  isDone: boolean;
}

export interface WorkoutsModel {
  id: number;
  name: string;
  description: string;
  category: string;
  muscle_target: string;
  thumbnail: string;
  video: string;
  equipment: boolean;
  skill_level: string;
  __typename: string;
}