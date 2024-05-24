import { Quiz } from '../../types/Quiz';

const defaultQuiz: Quiz = {
  id: `${Date.now()}`,
  quizName: '',
  questions: []
};

export default defaultQuiz;
