/* eslint-disable import/no-cycle */
import { createContext, useMemo } from 'react';

import { Quiz } from '../../types/Quiz';
import QuestionBlock from './components/QuestionBlock';

type FormProps = {
  formData: Quiz,
  setFormData: React.Dispatch<React.SetStateAction<Quiz>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
};

type FormContextProps = {
  formData: Quiz,
  setFormData: React.Dispatch<React.SetStateAction<Quiz>>
};

export const FormContext = createContext<FormContextProps | null>(null);

export default function Form({ formData, setFormData, handleSubmit }: FormProps): JSX.Element {
  const contextValue = useMemo(() => ({ formData, setFormData }), [formData, setFormData]);
  const handleQuizNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setFormData({
      ...formData,
      quizName: e.target.value,
    });
  };

  const addQuestion = (): void => {
    setFormData({
      ...formData,
      questions: [
        ...formData.questions,
        {
          id: `${Date.now()}`, text: '', rightAnswer: { id: '', text: '' }, answers: []
        },
      ],
    });
  };

  return (
    <FormContext.Provider value={contextValue}>
      <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-2">
        <div>
          <label>
            Quiz Name:
            <input
              type="text"
              name="quizName"
              value={formData.quizName}
              onChange={handleQuizNameChange}
            />
          </label>
        </div>
        <div>
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
        </div>
        {formData.questions.map((question) => (
          <QuestionBlock
            key={question.id}
            {...question}
          />
        ))}
        <button type="submit">Submit Quiz</button>
      </form>
    </FormContext.Provider>
  );
}
