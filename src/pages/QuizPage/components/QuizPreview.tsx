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
      className="flex flex-col justify-start items-center
      gap-2 p-4 border-2 rounded-md border-violet-800
      max-w-96 min-w-64 bg-violet-300"
    >
      <p className="text-3xl font-bold text-yellow-200">{quizName}</p>
      <div className="flex items-center gap-1">
        <button
          className="p-2 rounded-md hover:bg-green-400"
          type="button"
          onClick={(): void => navigate(`/quiz/${id}`)}
        >
          Start
        </button>
        <button
          className="p-2 rounded-md hover:bg-yellow-400"
          type="button"
          onClick={(): void => navigate(`/edit-quiz/${id}`)}
        >
          Edit
        </button>
        <button
          className="p-2 rounded-md hover:bg-red-400"
          type="button"
          onClick={(): Promise<void> => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
