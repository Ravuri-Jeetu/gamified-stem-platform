import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Logo from '../common/Logo';
import LanguageSwitcher from '../common/LanguageSwitcher';
import Button from '../ui/Button';

const Navbar = ({ sidebarOpen, setSidebarOpen }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Mock user data - in a real app, this would come from context/state
  const user = JSON.parse(localStorage.getItem('shikshaplay_user')) || null;
  
  const handleLogout = () => {
    localStorage.removeItem('shikshaplay_user');
    navigate('/auth/login');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-cocomelon-blue dark:bg-cocomelon-blue fixed w-full z-20 top-0 start-0 border-b border-cocomelon-blue dark:border-cocomelon-blue">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-start mx-auto p-4 gap-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Logo />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-cocomelon-black">ShikshaPlay</span>
        </Link>

        <div
          className={`items-center justify-between w-full md:flex md:w-auto ${isMobileMenuOpen ? 'block' : 'hidden'
            }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-cocomelon-blue rounded-lg bg-cocomelon-blue md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-cocomelon-blue dark:bg-cocomelon-blue dark:border-cocomelon-blue">
            <li>
              <Link
                to="/"
                className="block py-2 px-3 text-white bg-cocomelon-black rounded md:bg-transparent md:text-cocomelon-black md:p-0 md:dark:text-cocomelon-black"
                aria-current="page"
              >
                {t('home')}
              </Link>
            </li>
            <li>
              <Link
                to="/courses"
                className="block py-2 px-3 text-cocomelon-black rounded hover:bg-cocomelon-blue md:hover:bg-transparent md:hover:text-cocomelon-black md:p-0 md:dark:hover:text-cocomelon-black dark:text-cocomelon-black dark:hover:bg-cocomelon-blue dark:hover:text-cocomelon-black md:dark:hover:bg-transparent dark:border-prim..."
              >
                {t('nav.courses')}
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block py-2 px-3 text-cocomelon-black rounded hover:bg-cocomelon-blue md:hover:bg-transparent md:hover:text-cocomelon-black md:p-0 md:dark:hover:text-cocomelon-black dark:text-cocomelon-black dark:hover:bg-cocomelon-blue dark:hover:text-cocomelon-black md:dark:hover:bg-transparent dark:border-prim..."
              >
                {t('about')}
              </Link>
            </li>
            <li>
              <Link
                to="/ai"
                className="block py-2 px-3 text-cocomelon-black rounded hover:bg-cocomelon-blue md:hover:bg-transparent md:hover:text-cocomelon-black md:p-0 md:dark:hover:text-cocomelon-black dark:text-cocomelon-black dark:hover:bg-cocomelon-blue dark:hover:text-cocomelon-black md:dark:hover:bg-transparent dark:border-prim..."
              >
                {t('ai')}
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-3 rtl:space-x-reverse ml-auto">
          <Button
            variant="ghost"
            onClick={toggleMobileMenu}
            aria-controls="navbar-sticky"
            aria-expanded={isMobileMenuOpen}
            className="md:hidden"
            icon={
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            }
          >
            <span className="sr-only">Open main menu</span>
          </Button>
          <LanguageSwitcher />
          {/* User Dropdown */}
          {user ? (
            <div className="relative ml-3">
              <div>
                <Button
                  variant="ghost"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  aria-label="Open user menu"
                  icon={
                    <img
                      className="w-8 h-8 rounded-full"
                      src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                      alt="User avatar"
                    />
                  }
                />
              </div>
              {dropdownOpen && (
                <div
                  className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                  tabIndex="-1"
                >
                  <Button
                    variant="ghost"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-0"
                  >
                    Dashboard
                  </Button>
                  <Button
                    variant="ghost"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-1"
                  >
                    Settings
                  </Button>
                  <Button
                    variant="ghost"
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-primary-100"
                    role="menuitem"
                    tabIndex="-1"
                    id="user-menu-item-2"
                  >
                    Sign out
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-3">
              <Button
                as={Link}
                to="/auth/login"
                variant="primary"
                size="md"
              >
                Login
              </Button>
              <Button
                as={Link}
                to="/auth/register"
                variant="primary"
                size="md"
              >
                Register
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;