import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';

const LanguageSwitcher = ({ isDark = false }) => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  
  // Available languages
  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'bn', name: 'বাংলা' },
    { code: 'mr', name: 'मराठी' },
    { code: 'gu', name: 'ગુજરાતી' },
    { code: 'pa', name: 'ਪੰਜਾਬੀ' },
    { code: 'or', name: 'ଓଡ଼ିଆ' }
  ];
  
  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];
  
  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
    
    // Store language preference
    localStorage.setItem('shikshaplay_language', code);
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        className={`flex items-center text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 text-black dark:black`}
        onClick={() => setIsOpen(!isOpen)}
        icon={
          <svg
            className={`ml-1 h-5 w-5 ${isDark ? 'text-gray-400' : 'text-gray-500'}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        }
      >
        <span>{currentLanguage.name}</span>
      </Button>

      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10 dark:bg-gray-700 dark:ring-white dark:ring-opacity-10"
          role="menu"
          aria-orientation="vertical"
        >
          <div className="py-1" role="none">
            {languages.map((language) => (
              <Button
                key={language.code}
                variant="ghost"
                onClick={() => changeLanguage(language.code)}
                className={`w-full text-left block px-4 py-2 text-sm ${
                  language.code === i18n.language
                    ? 'bg-gray-100 text-gray-900 font-medium dark:bg-gray-600 dark:text-white'
                    : 'text-gray-700 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-gray-600'
                }`}
                role="menuitem"
              >
                {language.name}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;