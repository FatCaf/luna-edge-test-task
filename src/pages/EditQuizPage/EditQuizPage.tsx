import { useEffect, useState } from 'react';

import Form from '../../components/Form/Form';
import { Quiz } from '../../types/Quiz';
import defaultQuiz from '../../utils/defaultValues/DefaultQuiz';

export default function EditQuizPage(): JSX.Element {
  const [formData, setFormData] = useState<Quiz>(defaultQuiz);
  //   const { id } = useParams();

  useEffect(() => {
    const response: Quiz = JSON.parse(localStorage.getItem('quizzes') as string)[0];

    setFormData(response);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
  };

  return (
    <section>
      <Form formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
    </section>
  );
}
