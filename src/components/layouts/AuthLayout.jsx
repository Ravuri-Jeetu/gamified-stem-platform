import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Logo from '../common/Logo';

const AuthLayout = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-900">
      <header className="py-4 px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo size="sm" />
          <span className="ml-2 text-xl font-display font-semibold text-primary-700 dark:text-primary-400">ShikshaPlay</span>
        </Link>
        <LanguageSwitcher isDark={true} />
      </header>

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <div className="bg-white py-8 px-6 shadow-card rounded-lg sm:px-10 dark:bg-gray-800">
            <Outlet />
          </div>
        </div>
      </div>

      <footer className="py-4 px-6 text-center text-sm text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} ShikshaPlay. {t('footer.rights')}</p>
        <div className="mt-2">
          <Link to="/privacy" className="text-primary-600 hover:text-primary-800 mx-2 dark:text-primary-400 dark:hover:text-primary-300">
            {t('footer.privacy')}
          </Link>
          <Link to="/terms" className="text-primary-600 hover:text-primary-800 mx-2 dark:text-primary-400 dark:hover:text-primary-300">
            {t('footer.terms')}
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AuthLayout;