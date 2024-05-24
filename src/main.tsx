import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import EditQuizPage from './pages/EditQuizPage/EditQuizPage';
import QuizPage from './pages/QuizPage/QuizPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
        <Route path="/edit-quiz" element={<EditQuizPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
