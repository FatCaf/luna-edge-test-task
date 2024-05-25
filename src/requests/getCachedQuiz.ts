import { Quiz } from '../types/Quiz';
import TABLES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const getCachedQuiz = async (): Promise<Quiz> => new Promise((resolve, _) => {
  setTimeout(() => {
    const cachedQuiz = JSON.parse(localStorage.getItem(TABLES.TEMP_QUIZ) as string);

    if (cachedQuiz) resolve(cachedQuiz);
  }, TIMEOUT_VALUE);
});

export default getCachedQuiz;
