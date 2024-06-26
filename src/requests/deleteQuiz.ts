import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import getQuizzesFromStorage from './getQuizzesFromStorage';
import TABLES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const deleteQuiz = (id: string): Promise<Quiz[]> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes = getQuizzesFromStorage();

    if (quizzes) {
      const filteredQuizzes = quizzes.filter((quiz) => quiz.id !== id);
      localStorage.setItem(TABLES.QUIZZES, JSON.stringify(filteredQuizzes));
      resolve(filteredQuizzes);
    } else reject(toast.error('Can\'t delete this quiz'));
  }, TIMEOUT_VALUE);
});

export default deleteQuiz;
