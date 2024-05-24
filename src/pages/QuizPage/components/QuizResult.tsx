import { Quiz } from '../../../types/Quiz';
import { UserAnswer } from '../../../types/UserAnswer';

type QuizResultProps = {
  quiz: Quiz | undefined,
  answers: UserAnswer | undefined,
};

const compareAnswers = (quiz: Quiz | undefined, answers: UserAnswer | undefined): number => {
  let rightAnswers = 0;

  if (quiz && answers) {
    const { questions } = quiz;
    const answeredQuestions = Object.keys(answers);

    questions.forEach((question, index) => {
      if (answeredQuestions.includes(question.text)) {
        if (answers[answeredQuestions[index]] === question.rightAnswer.text) rightAnswers += 1;
      }
    });
  }

  return rightAnswers;
};

export default function QuizResult({ quiz, answers }: QuizResultProps): JSX.Element {
  return (
    <div>
      <h2>
        You have finished:
        {quiz && quiz.quizName}
      </h2>
      <p>
        Your result is:
        {compareAnswers(quiz, answers)}
      </p>
    </div>
  );
}
