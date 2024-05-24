import { Answer } from './Answer';

export type Question = {
  id: string,
  text: string,
  rightAnswer: Answer,
  answers: Answer[],
};
