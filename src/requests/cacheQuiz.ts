import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import TABLES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const cacheQuiz = (quiz: Quiz): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      localStorage.setItem(TABLES.TEMP_QUIZ, JSON.stringify(quiz));
      resolve('Quiz cached');
    } catch (e) {
      reject(toast.error((e as Error).message));
    }
  }, TIMEOUT_VALUE);
});

export default cacheQuiz;
