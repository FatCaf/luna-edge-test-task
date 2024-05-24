import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import QUIZZES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const editQuiz = (quiz: Quiz): Promise<string> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem(QUIZZES) as string);

    if (quizzes) {
      let found = false;
      const updatedQuizzes = quizzes.map((item) => {
        if (item.id === quiz.id) {
          found = true;

          return { ...quiz };
        }

        return item;
      });

      if (found) {
        localStorage.setItem(QUIZZES, JSON.stringify(updatedQuizzes));
        resolve('Quiz updated successfully.');
      } else {
        reject(toast.error('Quiz not found.'));
      }
    } else {
      reject(toast.error('No quizzes found in localStorage.'));
    }
  }, TIMEOUT_VALUE);
});

export default editQuiz;
