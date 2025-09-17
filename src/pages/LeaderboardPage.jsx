import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../assets/hero-image.svg'; // Using an existing SVG as a placeholder

const LeaderboardPage = () => {
  const { t } = useTranslation();
  const [leaderboardData, setLeaderboardData] = useState([]);

  useEffect(() => {
    // Placeholder for fetching leaderboard data - in a real application, this would come from an API call
    const sampleData = [
      { id: 1, user: 'Alice', score: 1500, quizzesCompleted: 10 },
      { id: 2, user: 'Bob', score: 1200, quizzesCompleted: 8 },
      { id: 3, user: 'Charlie', score: 1000, quizzesCompleted: 7 },
      { id: 4, user: 'David', score: 900, quizzesCompleted: 6 },
      { id: 5, user: 'Eve', score: 800, quizzesCompleted: 5 },
    ];
    setLeaderboardData(sampleData.sort((a, b) => b.score - a.score));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="EduQuest Logo" className="h-16" />
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">
          {t('leaderboardPage.title')}
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          {t('leaderboardPage.description')}
        </p>

        {leaderboardData.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white dark:bg-gray-700 rounded-lg shadow-md">
              <thead>
                <tr className="bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-200 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">{t('leaderboardPage.rank')}</th>
                  <th className="py-3 px-6 text-left">{t('leaderboardPage.user')}</th>
                  <th className="py-3 px-6 text-left">{t('leaderboardPage.score')}</th>
                  <th className="py-3 px-6 text-left">{t('leaderboardPage.quizCompleted')}</th>
                </tr>
              </thead>
              <tbody className="text-gray-700 dark:text-gray-300 text-sm font-light">
                {leaderboardData.map((entry, index) => (
                  <tr key={entry.id} className="border-b border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800">
                    <td className="py-3 px-6 text-left whitespace-nowrap">{index + 1}</td>
                    <td className="py-3 px-6 text-left">{entry.user}</td>
                    <td className="py-3 px-6 text-left">{entry.score}</td>
                    <td className="py-3 px-6 text-left">{entry.quizzesCompleted}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-700 dark:text-gray-300">{t('leaderboardPage.noUsersFound')}</p>
        )}
      </div>
    </div>
  );
};

export default LeaderboardPage;