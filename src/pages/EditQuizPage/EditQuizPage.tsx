import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import editQuiz from '../../requests/editQuiz';
import getQuizById from '../../requests/getQuizById';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';

export default function EditQuizPage(): JSX.Element {
  const [formData, setFormData] = useState<Quiz>(defaultQuiz);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getQuiz = async (): Promise<void> => {
      const response: Quiz = await getQuizById(id);

      setFormData(response);
    };

    getQuiz();
  }, [id]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await editQuiz(formData).then((res) => {
      toast.success(res);
      navigate(`/quiz/${id}`);
    });
  };

  return (
    <section>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>
  );
}
