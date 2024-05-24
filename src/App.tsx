
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import QuizPreview from './pages/QuizPage/components/QuizPreview';
import deleteQuiz from './requests/deleteQuiz';
import findQuizByName from './requests/findQuizByName';
import getAllQuizzes from './requests/getAllQuizzes';
import { Quiz } from './types/Quiz';

// prepopulate();

export default function App(): JSX.Element {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [quizName, setQuizName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const getQuiz = async (): Promise<void> => {
      const response: Quiz[] = await getAllQuizzes();

      if (response) {
        setQuizzes(response);
      }
    };

    getQuiz();
  }, []);

  const handleDelete = async (id: string): Promise<void> => {
    const updatedQuizzes = await deleteQuiz(id);

    if (updatedQuizzes) setQuizzes(updatedQuizzes);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuizName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const foundQuiz = await findQuizByName(quizName);

    setQuizzes([foundQuiz]);
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label>
          <input type="text" name="quiz-search" placeholder="Enter quiz name" onChange={handleChange} />
        </label>
        <button type="submit">Find</button>
      </form>
      <button type="button" onClick={(): void => navigate('/create-quiz')}>CreateQuiz</button>
      <div className=" grid grid-flow-col grid-cols-4 gap-4">
        {quizzes.map((quiz) => <QuizPreview key={quiz.id} {...quiz} handleDelete={handleDelete} />)}
      </div>
    </section>
  );
}
