import { Link } from 'react-router-dom';

export default function Header(): JSX.Element {
  return (
    <header className="flex justify-start items-center">
      <nav className="w-3/12">
        <ul className="flex justify-between items-center">
          <li className="p-2 hover:underline">
            <Link to="/">Home</Link>
          </li>
          <li className="p-2 hover:underline">
            <Link to="/create-quiz">Create Quiz</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
