import { useEffect, useState } from 'react';

import { Quiz } from '../../types/Quiz';
import { UserAnswer } from '../../types/UserAnswer';
import QuizForm from './components/QuizForm';
import QuizResult from './components/QuizResult';

const makeAnswerForm = (quiz: Quiz): UserAnswer => {
  const answerForm: UserAnswer = {};

  quiz.questions.forEach((item) => {
    answerForm[item.text] = '';
  });

  return answerForm;
};

export default function QuizPage(): JSX.Element {
  const [quiz, setQuiz] = useState<Quiz>();
  const [questionsQuantity, setQuestionsQuantity] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer>();

  const [isQuizFinished, setIsQuizFinished] = useState(false);
  useEffect(() => {
    const response: Quiz = JSON.parse(localStorage.getItem('quizzes') as string)[0];

    setQuiz(response);
    setQuestionsQuantity(response.questions.length);
    const answerForm = makeAnswerForm(response);
    setUserAnswers(answerForm);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAnswers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div>
      {isQuizFinished ? <QuizResult quiz={quiz} answers={userAnswers} /> : (
        <>
          <h2>{quiz && quiz.quizName}</h2>
          <QuizForm
            quiz={quiz}
            questionsQuantity={questionsQuantity}
            setIsQuizFinished={setIsQuizFinished}
            handleChange={handleChange}
          />
        </>
      )}
    </div>
  );
}
