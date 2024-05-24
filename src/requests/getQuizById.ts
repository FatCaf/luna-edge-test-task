import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import QUIZZES from './tableNames';

const getQuizById = (id: string | undefined): Promise<Quiz> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem(QUIZZES) as string);

    if (quizzes) {
      const quiz = quizzes.find((item) => item.id === id);

      if (quiz) resolve(quiz);
      else reject(toast.error('Can\'t find this quiz'));
    }
  }, 0);
});

export default getQuizById;
