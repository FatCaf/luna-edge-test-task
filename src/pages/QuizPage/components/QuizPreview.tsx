import { useNavigate } from 'react-router-dom';

import { Quiz } from '../../../types/Quiz';

type QuizPReviewPRops = Quiz & {
  id: string,
  quizName: string,
  handleDelete: (id: string) => Promise<void>
};

export default function QuizPreview({ id, quizName, handleDelete }: QuizPReviewPRops): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 border-2 rounded-md border-violet-800 cursor-pointer"
    >
      <p className="text-3xl font-bold underline">{quizName}</p>
      <button type="button" onClick={(): void => navigate(`/quiz/${id}`)}>Start</button>
      <button type="button" onClick={(): void => navigate(`/edit-quiz/${id}`)}>Edit</button>
      <button type="button" onClick={(): Promise<void> => handleDelete(id)}>Delete</button>
    </div>
  );
}
