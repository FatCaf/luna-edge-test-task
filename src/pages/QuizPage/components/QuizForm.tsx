/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import { useEffect, useState } from 'react';

import { Quiz } from '../../../types/Quiz';

type QuizFormProps = {
  quiz: Quiz | undefined,
  questionsQuantity: number,
  setIsQuizFinished: React.Dispatch<React.SetStateAction<boolean>>,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
};

export default function QuizForm({
  quiz, questionsQuantity, setIsQuizFinished, handleChange
}: QuizFormProps): JSX.Element {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(quiz?.questions[0]);

  useEffect(() => {
    setCurrentQuestion(quiz?.questions[currentIndex]);
  }, [currentIndex, quiz?.questions]);

  const handleClickNext = (): void => {
    setCurrentIndex((prev) => prev += 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (questionsQuantity - 1 > currentIndex) {
      handleClickNext();
    } else setIsQuizFinished(true);
  };

  return (
    <div className="w-full">
      <p>
        Questions:
        {' '}
        {currentIndex + 1}
        /
        {questionsQuantity}
      </p>
      <hr />
      <form className="flex gap-4 flex-col justify-center items-center" onSubmit={handleSubmit}>
        <p className="text-2xl font-semibold">{currentQuestion && currentQuestion.text}</p>
        {currentQuestion && currentQuestion.answers.map((answer) => (
          <label
            id={answer.id}
            key={answer.id}
            className="max-w-2xl min-w-52 justify-between
           flex p-4 bg-slate-300 rounded-md self-start"
          >
            <input
              className="cursor-pointer"
              type="radio"
              name={currentQuestion.text}
              id={answer.id}
              value={answer.text}
              required
              onChange={handleChange}
            />
            {answer.text}
          </label>
        ))}
        <button
          className="p-2 bg-green-400 rounded-md self-start"
          type="submit"
        >
          {questionsQuantity - 1 === currentIndex ? 'Submit' : 'Next'}
        </button>
      </form>
    </div>
  );
}
