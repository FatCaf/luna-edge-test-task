/* eslint-disable import/no-cycle */
import React, { createContext, useState } from 'react';

import Form from '../../components/Form/Form';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';

type QuizContext = {
  formData: Quiz,
  setFormData: React.Dispatch<React.SetStateAction<Quiz>>
};
export const CreateQuizContext = createContext<QuizContext | null>(null);

export default function QuizForm(): JSX.Element {
  const [formData, setFormData] = useState<Quiz>(defaultQuiz);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    const quizzes: Quiz[] = JSON.parse(localStorage.getItem('quizzes') as string);

    if (quizzes) {
      quizzes.push(formData);
      localStorage.setItem('quizzes', JSON.stringify(quizzes));
    }
  };

  return (
    <section>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>

  );
}
