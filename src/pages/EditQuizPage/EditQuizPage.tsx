import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

import Form from '../../components/Form/Form';
import editQuiz from '../../requests/editQuiz';
import getCachedQuiz from '../../requests/getCachedQuiz';
import getQuizById from '../../requests/getQuizById';
import TABLES from '../../requests/tableNames';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';
import useCachedQuiz from '../../utils/hooks/useCachedQuiz';

export default function EditQuizPage(): JSX.Element {
  const [formData, setFormData] = useCachedQuiz(defaultQuiz);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getQuiz = async (): Promise<void> => {
      const response: Quiz = await getQuizById(id);

      const cachedQuiz = await getCachedQuiz();

      if (cachedQuiz) setFormData(cachedQuiz);
      else setFormData(response);
    };

    getQuiz();
  }, [id, setFormData]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    await editQuiz(formData).then((res) => {
      toast.success(res);
      localStorage.removeItem(TABLES.TEMP_QUIZ);
      navigate('/');
    });
  };

  return (
    <section>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>
  );
}
