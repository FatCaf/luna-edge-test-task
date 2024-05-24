import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import QUIZZES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const getAllQuizzes = (): Promise<Quiz[]> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem(QUIZZES) as string);

    if (quizzes) resolve(quizzes);
    else reject(toast.error('Ooops can\'t find any quizzes'));
  }, TIMEOUT_VALUE);
});

export default getAllQuizzes;
