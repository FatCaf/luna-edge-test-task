/* eslint-disable import/no-cycle */
import React, { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import createQuiz from '../../requests/createQuiz';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';

type QuizContext = {
  formData: Quiz,
  setFormData: React.Dispatch<React.SetStateAction<Quiz>>
};
export const CreateQuizContext = createContext<QuizContext | null>(null);

export default function QuizForm(): JSX.Element {
  const [formData, setFormData] = useState<Quiz>(defaultQuiz);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await createQuiz(formData).then((res) => {
      navigate('/');
      toast.success(res);
    });
  };

  return (
    <section>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>

  );
}
