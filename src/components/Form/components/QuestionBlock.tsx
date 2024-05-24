/* eslint-disable import/no-cycle */

import { useContext } from 'react';

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
  id, text, answers
}: QuestionBlockProps): JSX.Element {
  const context = useContext(FormContext);

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
    <div className="flex flex-col justify-center items-center gap-2">
      <label>
        Question:
        <input
          type="text"
          name="question"
          defaultValue={text}
          onChange={(e) => handleQuestionChange(e.target.value)}
        />
        <button type="button" onClick={deleteQuestion}>X</button>
      </label>
      <button type="button" onClick={() => addAnswer(id)}>
        Add Answer
      </button>
      {answers.map((answer) => (
        <AnswerBlock
          key={answer.id}
          {...answer}
          questionId={id}
        />
      ))}
    </div>
  );
}
