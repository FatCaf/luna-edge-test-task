/* eslint-disable import/no-cycle */
import React, { createContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import createQuiz from '../../requests/createQuiz';
import TABLES from '../../requests/tableNames';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';
import useCachedQuiz from '../../utils/hooks/useCachedQuiz';

type QuizContext = {
  formData: Quiz,
  setFormData: React.Dispatch<React.SetStateAction<Quiz>>
};
export const CreateQuizContext = createContext<QuizContext | null>(null);

export default function QuizForm(): JSX.Element {
  const [formData, setFormData] = useCachedQuiz(defaultQuiz);
  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await createQuiz(formData).then((res) => {
      navigate('/');
      localStorage.removeItem(TABLES.TEMP_QUIZ);
      toast.success(res);
    });
  };

  return (
    <section className="mt-20 flex flex-col justify-start items-center gap-8">
      <h1 className="font-bold text-5xl">Quiz creator</h1>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>
  );
}
