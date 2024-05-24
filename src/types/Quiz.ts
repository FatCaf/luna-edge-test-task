import { Question } from './Question';

export type Quiz = {
  id: string,
  quizName: string,
  questions: Question[],
};
