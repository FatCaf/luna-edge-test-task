
import { useNavigate } from 'react-router-dom';

import QuizPreview from './pages/QuizPage/components/QuizPreview';

// prepopulate();

export default function App(): JSX.Element {
  const navigate = useNavigate();

  return (
    <>
      <button type="button" onClick={(): void => navigate('/create-quiz')}>CreateQuiz</button>
      <div className=" grid grid-flow-col grid-cols-4 gap-4">
        <QuizPreview />
        <QuizPreview />
        <QuizPreview />
        <QuizPreview />
      </div>
    </>
  );
}
