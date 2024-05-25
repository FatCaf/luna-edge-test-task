/* eslint-disable import/no-cycle */
import { useContext } from 'react';

import { Answer } from '../../../types/Answer';
import { FormContext } from '../Form';

type AnswerBlockProps = Answer & {
  id: string,
  text: string,
  questionId: string,
  setClickedAnswer: React.Dispatch<React.SetStateAction<string>>,
  clickedAnswer: string,
};

export default function AnswerBlock({
  id, text, questionId, clickedAnswer, setClickedAnswer
}: AnswerBlockProps): JSX.Element {
  const context = useContext(FormContext);

  const handleAnswerChange = (value: string): void => {
    if (context) {
      const { formData, setFormData } = context;

      setFormData({
        ...formData,
        questions: formData.questions.map((question) => (question.id === questionId
          ? {
            ...question,
            answers: question.answers.map((answer) => (answer.id === id ? { ...answer, text: value } : answer)),
            rightAnswer: question.rightAnswer.id === id ? { id, text: value } : question.rightAnswer,
          }
          : question)),
      });
    }
  };

  const handleChooseRightAnswer = (e: React.MouseEvent<HTMLButtonElement>): void => {
    if (context) {
      const { formData, setFormData } = context;
      setFormData({
        ...formData,
        questions: formData.questions.map((question) => (question.id === questionId
          ? {
            ...question,
            rightAnswer: { id, text },
          }
          : question)),
      });
      setClickedAnswer(e.currentTarget.id);
    }
  };

  const deleteAnswer = (): void => {
    if (context) {
      const { formData, setFormData } = context;
      setFormData({
        ...formData,
        questions: formData.questions.map((question) => (question.id === questionId
          ? {
            ...question,
            answers: question.answers.filter((answer) => answer.id !== id),
            rightAnswer: question.rightAnswer.id === id ? { id: '', text: '' } : question.rightAnswer,
          }
          : question)),
      });
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 gap-2 border-2 rounded-md border-violet-800 w-full">
      <label className="flex items-center gap-2 w-full">
        Answer:
        <input
          className="outline-none border-b-2 w-8/12"
          type="text"
          name="answer"
          required
          value={text}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
        <button className="p-2 bg-red-400 rounded-md max-w-9 min-w-9" type="button" onClick={deleteAnswer}>X</button>
        <button
          id={id}
          className={`p-2 rounded-md  outline outline-2
          outline-yellow-400  hover:bg-transparent ${id === clickedAnswer ? 'bg-transparent' : 'bg-yellow-400'}`}
          type="button"
          onClick={handleChooseRightAnswer}
        >
          Right answer
        </button>
      </label>
    </div>
  );
}
