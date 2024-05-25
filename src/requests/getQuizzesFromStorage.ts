import { Quiz } from '../types/Quiz';
import TABLES from './tableNames';

const getQuizzesFromStorage = (): Quiz[] => JSON.parse(localStorage.getItem(TABLES.QUIZZES) as string);

export default getQuizzesFromStorage;
