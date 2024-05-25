import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import getQuizzesFromStorage from './getQuizzesFromStorage';

const getQuizById = (id: string | undefined): Promise<Quiz> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes = getQuizzesFromStorage();

    if (quizzes) {
      const quiz = quizzes.find((item) => item.id === id);

      if (quiz) resolve(quiz);
      else reject(toast.error('Can\'t find this quiz'));
    }
  }, 0);
});

export default getQuizById;
