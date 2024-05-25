import { useEffect, useState } from 'react';

import QuizPreview from './pages/QuizPage/components/QuizPreview';
import prepopulate from './prepopulateQuiz';
import deleteQuiz from './requests/deleteQuiz';
import findQuizByName from './requests/findQuizByName';
import getAllQuizzes from './requests/getAllQuizzes';
import { Quiz } from './types/Quiz';

prepopulate();

export default function Home(): JSX.Element {
  const [quizzes, setQuizzes] = useState<Quiz[]>([]);
  const [quizName, setQuizName] = useState('');

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
    <section className="mt-20 flex flex-col justify-start items-center gap-8">
      <h1 className="font-bold text-5xl">Choose a quiz</h1>
      <form className="self-start p-2 border-2 rounded-md border-violet-800" onSubmit={handleSubmit}>
        <label>
          <input
            className="outline-none"
            type="text"
            name="quiz-search"
            placeholder="Enter quiz name"
            onChange={handleChange}
          />
        </label>
        <button className="p-2 w-14 rounded-md hover:bg-purple-400" type="submit">Find</button>
      </form>
      <div className=" grid grid-flow-col grid-cols-4 gap-4 self-start">
        {quizzes.map((quiz) => <QuizPreview key={quiz.id} {...quiz} handleDelete={handleDelete} />)}
      </div>
    </section>
  );
}
