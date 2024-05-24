import { useNavigate } from 'react-router-dom';

export default function QuizPreview(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div
      className="p-4 border-2 rounded-md border-violet-800 cursor-pointer"
    >
      <p className="text-3xl font-bold underline">Quizname</p>
      <button type="button" onClick={(): void => navigate('/quiz')}>Start</button>
      <button type="button" onClick={(): void => navigate('/edit-quiz')}>Edit</button>
    </div>
  );
}
