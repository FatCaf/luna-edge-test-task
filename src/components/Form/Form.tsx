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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center
       gap-2 w-full pb-5"
      >
        <div className="p-2 border-2 rounded-md border-violet-800">
          <label>
            Quiz Name:
            {' '}
            <input
              className="outline-none"
              type="text"
              name="quizName"
              value={formData.quizName}
              maxLength={24}
              required
              onChange={handleQuizNameChange}
            />
          </label>
        </div>
        <div className="p-2 rounded-md bg-green-400 max-w-36 min-w-28">
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
        </div>
        <div className="max-w-4xl w-7/12 flex flex-col
         items-center gap-2  max-h-screen overflow-y-auto"
        >
          {formData.questions.map((question) => (
            <QuestionBlock
              key={question.id}
              {...question}
            />
          ))}
        </div>
        <button className="w-7/12 rounded-md hover:bg-violet-400 text-2xl" type="submit">Submit Quiz</button>
      </form>
    </FormContext.Provider>
  );
}
