/* eslint-disable import/no-cycle */
import { useContext } from 'react';

import { Answer } from '../../../types/Answer';
import { FormContext } from '../Form';

type AnswerBlockProps = Answer & {
  id: string,
  text: string,
  questionId: string,
};

export default function AnswerBlock({
  id, text, questionId
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

  const handleChooseRightAnswer = (): void => {
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
    <div>
      <label>
        Answer:
        <input
          type="text"
          name="answer"
          required
          value={text}
          onChange={(e) => handleAnswerChange(e.target.value)}
        />
        <button type="button" onClick={deleteAnswer}>X</button>
        <button type="button" onClick={handleChooseRightAnswer}>Right answer</button>
      </label>
    </div>
  );
}
