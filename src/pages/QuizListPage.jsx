import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Logo from '../assets/hero-image.svg'; // Using an existing SVG as a placeholder

const QuizListPage = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  // Placeholder for quizzes data - in a real application, this would come from an API call
  const quizzes = [
    { id: 1, title: 'React Basics', category: 'Programming', difficulty: 'easy' },
    { id: 2, title: 'JavaScript Fundamentals', category: 'Programming', difficulty: 'medium' },
    { id: 3, title: 'HTML & CSS', category: 'Web Development', difficulty: 'easy' },
    { id: 4, title: 'Advanced Python', category: 'Programming', difficulty: 'hard' },
    { id: 5, title: 'Data Structures', category: 'Computer Science', difficulty: 'medium' },
  ];

  const filteredQuizzes = quizzes.filter(quiz => {
    const matchesSearchTerm = quiz.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || quiz.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesDifficulty = selectedDifficulty === 'all' || quiz.difficulty.toLowerCase() === selectedDifficulty.toLowerCase();
    return matchesSearchTerm && matchesCategory && matchesDifficulty;
  });

  const categories = [...new Set(quizzes.map(quiz => quiz.category))];
  const difficulties = [...new Set(quizzes.map(quiz => quiz.difficulty))];

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="EduQuest Logo" className="h-16" />
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">
          {t('quizListPage.title')}
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t('quizListPage.description')}
        </p>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder={t('quizListPage.searchPlaceholder')}
            className="flex-grow p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">{t('quizListPage.allCategories')}</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="all">{t('quizListPage.allDifficulties')}</option>
            {difficulties.map(difficulty => (
              <option key={difficulty} value={difficulty}>{t(`quizListPage.${difficulty}`)}</option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuizzes.length > 0 ? (
            filteredQuizzes.map(quiz => (
              <div key={quiz.id} className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-md space-y-4">
                <h3 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">{quiz.title}</h3>
                <p className="text-gray-700 dark:text-gray-300">{t('common.category')}: {quiz.category}</p>
                <p className="text-gray-700 dark:text-gray-300">{t('quizListPage.difficulty')}: {t(`quizListPage.${quiz.difficulty}`)}</p>
                <button className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300">
                  {t('quizListPage.startQuiz')}
                </button>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-700 dark:text-gray-300 col-span-full">{t('quizListPage.noQuizzesFound')}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuizListPage;