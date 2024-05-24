import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import QUIZZES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const createQuiz = (newQuiz: Quiz): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem(QUIZZES) as string);

    if (quizzes && !quizzes.includes(newQuiz)) {
      quizzes.push(newQuiz);
      localStorage.setItem(QUIZZES, JSON.stringify(quizzes));
      resolve('Quiz successfully added');
    } else reject(toast.error('Can\'t add quiz'));
  }, TIMEOUT_VALUE);
});

export default createQuiz;
