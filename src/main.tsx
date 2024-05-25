import 'react-toastify/dist/ReactToastify.css';
import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Layout from './components/Layout/Layout';
import Home from './Home';
import CreateQuizPage from './pages/CreateQuizPage/CreateQuizPage';
import EditQuizPage from './pages/EditQuizPage/EditQuizPage';
import QuizPage from './pages/QuizPage/QuizPage';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="quiz/:id" element={<QuizPage />} />
          <Route path="create-quiz" element={<CreateQuizPage />} />
          <Route path="edit-quiz/:id" element={<EditQuizPage />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  </React.StrictMode>
);
