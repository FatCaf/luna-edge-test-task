import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import getQuizzesFromStorage from './getQuizzesFromStorage';
import TIMEOUT_VALUE from './timeoutValue';

const getAllQuizzes = (): Promise<Quiz[]> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes = getQuizzesFromStorage();

    if (quizzes) resolve(quizzes);
    else reject(toast.error('Ooops can\'t find any quizzes'));
  }, TIMEOUT_VALUE);
});

export default getAllQuizzes;
