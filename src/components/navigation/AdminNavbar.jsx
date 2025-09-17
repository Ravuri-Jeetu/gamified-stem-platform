import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Button from '../ui/Button';

const AdminNavbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  // Mock admin data - in a real app, this would come from context/state
  const admin = JSON.parse(localStorage.getItem('eduquest_user')) || { name: 'Admin' };
  
  const handleLogout = () => {
    localStorage.removeItem('eduquest_user');
    navigate('/auth/login');
  };

  return (
    <nav className="bg-gray-800 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              className="lg:hidden"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              icon={
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={sidebarOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              }
            >
              <span className="sr-only">{t('common.openMenu')}</span>
            </Button>
            
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/admin/dashboard" className="flex items-center">
                <Logo size="sm" />
                <span className="ml-2 text-xl font-display font-semibold text-white dark:text-gray-100">ShikshaPlay Admin</span>
              </Link>
            </div>
          </div>
          
          <div className="flex items-center">
            {/* Notifications */}
            <Button
              variant="ghost"
              className="p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white dark:hover:text-gray-100 dark:focus:ring-offset-gray-900 dark:focus:ring-gray-500"
              icon={
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              }
            >
              <span className="sr-only">{t('common.viewNotifications')}</span>
            </Button>
            
            <LanguageSwitcher />
            
            {/* User dropdown */}
            <div className="ml-3 relative">
              <div>
                <Button
                  variant="ghost"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded="false"
                  aria-haspopup="true"
                  icon={
                    <div className="h-8 w-8 rounded-full bg-gray-500 flex items-center justify-center text-white font-medium dark:bg-gray-600 dark:text-gray-300">
                      {admin.name.charAt(0).toUpperCase()}
                    </div>
                  }
                >
                  <span className="sr-only">{t('common.openUserMenu')}</span>
                </Button>
              </div>
              
              {/* Dropdown menu */}
              {dropdownOpen && (
                <div
                  className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-gray-700 dark:ring-gray-700"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu"
                >
                  <Link
                    to="/admin/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Button variant="ghost" className="w-full text-left">
                      {t('nav.profile')}
                    </Button>
                  </Link>
                  <Link
                    to="/admin/settings"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    role="menuitem"
                    onClick={() => setDropdownOpen(false)}
                  >
                    <Button variant="ghost" className="w-full text-left">
                      {t('nav.settings')}
                    </Button>
                  </Link>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600"
                    role="menuitem"
                  >
                    {t('nav.signOut')}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default AdminNavbar;