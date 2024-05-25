/* eslint-disable import/no-cycle */

import { useContext, useState } from 'react';

import { Answer } from '../../../types/Answer';
import { Question } from '../../../types/Question';
import { FormContext } from '../Form';
import AnswerBlock from './AnswerBlock';

type QuestionBlockProps = Question & {
  id: string,
  text: string,
  answers: Answer[],
};

export default function QuestionBlock({
  id, text, answers, rightAnswer
}: QuestionBlockProps): JSX.Element {
  const context = useContext(FormContext);
  const [clickedAnswer, setClickedAnswer] = useState(rightAnswer.id);
  const handleQuestionChange = (value: string): void => {
    if (context) {
      const { formData, setFormData } = context;
      setFormData({
        ...formData,
        questions: formData.questions.map((question) => (question.id === id
          ? { ...question, text: value } : question)),
      });
    }
  };

  const addAnswer = (questionId: string): void => {
    if (context) {
      const { formData, setFormData } = context;
      setFormData({
        ...formData,
        questions: formData.questions.map((question) => (question.id === questionId
          ? {
            ...question,
            answers: [
              ...question.answers,
              { id: `${Date.now()}`, text: '' },
            ],
          }
          : question)),
      });
    }
  };

  const deleteQuestion = (): void => {
    if (context) {
      const { formData, setFormData } = context;
      setFormData(({
        ...formData,
        questions: formData.questions.filter((question) => question.id !== id)
      }));
    }
  };

  return (
    <div className="flex flex-col justify-center items-center p-2 gap-2 border-2 rounded-md border-violet-800
    w-full"
    >
      <label className="p-2 flex items-center gap-2 w-full">
        Question:
        {' '}
        <input
          className="outline-none border-b-2 w-full"
          type="text"
          name="question"
          required
          defaultValue={text}
          onChange={(e) => handleQuestionChange(e.target.value)}
        />
        <button className="p-2 bg-red-400 rounded-md max-w-9 min-w-9" type="button" onClick={deleteQuestion}>X</button>
      </label>
      <button className="p-2 rounded-md bg-green-400 max-w-36 min-w-28" type="button" onClick={() => addAnswer(id)}>
        Add Answer
      </button>
      {answers.map((answer) => (
        <AnswerBlock
          key={answer.id}
          {...answer}
          questionId={id}
          setClickedAnswer={setClickedAnswer}
          clickedAnswer={clickedAnswer}
        />
      ))}
    </div>
  );
}
