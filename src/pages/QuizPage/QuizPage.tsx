import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getQuizById from '../../requests/getQuizById';
import { Quiz } from '../../types/Quiz';
import { UserAnswer } from '../../types/UserAnswer';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';
import makeAnswerForm from '../../utils/makeAnswerForm';
import QuizForm from './components/QuizForm';
import QuizResult from './components/QuizResult';

export default function QuizPage(): JSX.Element {
  const [quiz, setQuiz] = useState<Quiz>(defaultQuiz);
  const [questionsQuantity, setQuestionsQuantity] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer>();
  const { id } = useParams();
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  useEffect(() => {
    const getQuiz = async (): Promise<void> => {
      const response: Quiz = await getQuizById(id);

      setQuiz(response);
      setQuestionsQuantity(response.questions.length);
      const answerForm = makeAnswerForm(response);
      setUserAnswers(answerForm);
    };

    getQuiz();
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserAnswers((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="mt-20 flex flex-col justify-start items-center gap-8">
      {isQuizFinished ? <QuizResult quiz={quiz} answers={userAnswers} /> : (
        <div className="flex flex-col justify-start items-center gap-8 min-w-full">
          <h1 className="font-bold text-5xl">{quiz && quiz.quizName}</h1>
          <QuizForm
            quiz={quiz}
            questionsQuantity={questionsQuantity}
            setIsQuizFinished={setIsQuizFinished}
            handleChange={handleChange}
          />
        </div>
      )}
    </section>
  );
}
