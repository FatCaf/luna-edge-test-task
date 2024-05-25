import { useEffect, useState } from 'react';

import cacheQuiz from '../../requests/cacheQuiz';
import TABLES from '../../requests/tableNames';
import { Quiz } from '../../types/Quiz';

const useCachedQuiz = (initialState: Quiz): [Quiz, React.Dispatch<React.SetStateAction<Quiz>>] => {
  const [formData, setFormData] = useState<Quiz>(() => {
    const cachedData = localStorage.getItem(TABLES.TEMP_QUIZ);

    return cachedData ? JSON.parse(cachedData) : initialState;
  });
  useEffect(() => {
    const cache = async (): Promise<void> => {
      await cacheQuiz(formData);
    };

    cache();
  }, [formData]);

  return [formData, setFormData];
};

export default useCachedQuiz;
