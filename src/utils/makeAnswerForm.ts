import { Quiz } from '../types/Quiz';
import { UserAnswer } from '../types/UserAnswer';

const makeAnswerForm = (quiz: Quiz): UserAnswer => {
  const answerForm: UserAnswer = {};

  quiz.questions.forEach((item) => {
    answerForm[item.text] = '';
  });

  return answerForm;
};

export default makeAnswerForm;
