import { toast } from 'react-toastify';

import { Quiz } from '../types/Quiz';
import QUIZZES from './tableNames';
import TIMEOUT_VALUE from './timeoutValue';

const findQuizByName = (name: string): Promise<Quiz> => new Promise((resolve, reject) => {
  setTimeout(() => {
    const quizzes: Quiz[] = JSON.parse(localStorage.getItem(QUIZZES) as string);

    if (quizzes) {
      const foundQuiz = quizzes.find((quiz) => quiz.quizName.match(name));

      if (foundQuiz) resolve(foundQuiz);
      else reject(toast.error(`No quiz with name: ${name} was found`));
    }
  }, TIMEOUT_VALUE);
});

export default findQuizByName;
