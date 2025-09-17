import React from 'react';

const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-50 dark:bg-primary-900">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-primary-700 dark:text-primary-300">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">Page Not Found</p>
        <p className="text-gray-500 dark:text-gray-500">The page you are looking for does not exist.</p>
        <a href="/" className="mt-6 inline-block px-6 py-3 bg-primary-600 text-white rounded-lg shadow hover:bg-primary-700 transition duration-300">
          Go to Home
        </a>
      </div>
    </div>
  );
};

export default NotFoundPage;