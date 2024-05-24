import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import App from './App';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import EditQuizPage from './pages/EditQuizPage/EditQuizPage';
import QuizPage from './pages/QuizPage/QuizPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/quiz/:id" element={<QuizPage />} />
        <Route path="/create-quiz" element={<CreateQuizPage />} />
        <Route path="/edit-quiz/:id" element={<EditQuizPage />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
