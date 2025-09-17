import React from 'react';
import { useTranslation } from 'react-i18next';
import Logo from '../components/common/Logo';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <Logo />
          <h1 className="text-4xl font-extrabold text-primary-600 dark:text-primary-400 mt-4">
            {t('aboutPage.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mt-4">
            {t('aboutPage.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-500 dark:text-primary-300 mb-4">
              {t('aboutPage.missionTitle')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('aboutPage.missionDescription')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary-500 dark:text-primary-300 mb-4">
              {t('aboutPage.visionTitle')}
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              {t('aboutPage.visionDescription')}
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-600 dark:text-primary-400">
            {t('aboutPage.teamTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              src="https://via.placeholder.com/150"
              alt={t('aboutPage.teamMember1Name')}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('aboutPage.teamMember1Name')}
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              {t('aboutPage.teamMember1Role')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              src="https://via.placeholder.com/150"
              alt={t('aboutPage.teamMember2Name')}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('aboutPage.teamMember2Name')}
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              {t('aboutPage.teamMember2Role')}
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              src="https://via.placeholder.com/150"
              alt={t('aboutPage.teamMember3Name')}
            />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t('aboutPage.teamMember3Name')}
            </h3>
            <p className="text-primary-600 dark:text-primary-400">
              {t('aboutPage.teamMember3Role')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;