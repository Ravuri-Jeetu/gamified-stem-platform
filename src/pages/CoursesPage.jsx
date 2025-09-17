import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../components/ui/Button';
import Logo from '../components/common/Logo';
import { courses as adminCourses } from './Admin/AdminCourseList'; // Import courses from AdminCourseList

const CoursesPage = () => {
  const { t } = useTranslation();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [courses, setCourses] = useState([]); // State to store fetched courses
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // New state variables to hold the applied filters
  const [appliedSearchQuery, setAppliedSearchQuery] = useState('');
  const [appliedSelectedCategory, setAppliedSelectedCategory] = useState('all');
  const [appliedSelectedDifficulty, setAppliedSelectedDifficulty] = useState('all');

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        console.log('Starting fetch to backend...');
        const response = await fetch('http://localhost:3001/api/courses');
        console.log('Response received:', response);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const categories = [
    { id: 'all', name: t('coursesPage.allCategories') },
    { id: 'programming', name: 'Programming' },
    { id: 'mathematics', name: 'Mathematics' },
    { id: 'science', name: 'Science' },
    { id: 'language', name: 'Language' },
  ];

  const difficulties = [
    { id: 'all', name: t('coursesPage.allDifficulties') },
    { id: 'beginner', name: t('coursesPage.beginner') },
    { id: 'intermediate', name: t('coursesPage.intermediate') },
    { id: 'advanced', name: t('coursesPage.advanced') },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Apply the current filter values
    setAppliedSearchQuery(searchQuery);
    setAppliedSelectedCategory(selectedCategory);
    setAppliedSelectedDifficulty(selectedDifficulty);
  };

  // Filter courses based on applied search query, category, and difficulty
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.name.toLowerCase().includes(appliedSearchQuery.toLowerCase());
    const matchesCategory = appliedSelectedCategory === 'all' || course.category.toLowerCase() === appliedSelectedCategory;
    const matchesDifficulty = appliedSelectedDifficulty === 'all' || course.difficulty.toLowerCase() === appliedSelectedDifficulty; // Assuming difficulty is added to course object

    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  console.log('Filtered Courses:', filteredCourses); // Add this line for debugging

  if (loading) {
    return <div className="text-center text-gray-600 dark:text-gray-400">Loading courses...</div>;
  }

  if (error) {
    return <div className="text-center text-red-600 dark:text-red-400">Error: {error.message}</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex-grow p-4">
        <div className="flex justify-center mb-4">
          <Logo className="h-12 w-auto" />
        </div>
        <h2 className="text-center text-2xl font-extrabold text-gray-900 dark:text-white mb-6">
          {t('coursesPage.title')}
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          {t('coursesPage.description')}
        </p>

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div>
              <label htmlFor="search" className="sr-only">
                {t('coursesPage.searchPlaceholder')}
              </label>
              <input
                id="search"
                type="text"
                placeholder={t('coursesPage.searchPlaceholder')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-500 focus:border-accent-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('coursesPage.category')}
                </label>
                <select
                  id="category"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-500 focus:border-accent-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  {categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="difficulty" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  {t('coursesPage.difficulty')}
                </label>
                <select
                  id="difficulty"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-accent-500 focus:border-accent-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value)}
                >
                  {difficulties.map((difficulty) => (
                    <option key={difficulty.id} value={difficulty.id}>
                      {difficulty.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button
                type="button"
                variant="secondary"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedDifficulty('all');
                  setAppliedSearchQuery(''); // Reset applied filters
                  setAppliedSelectedCategory('all');
                  setAppliedSelectedDifficulty('all');
                }}
              >
                {t('coursesPage.resetFilters')}
              </Button>
              <Button type="submit" variant="accent">
                {t('coursesPage.applyFilters')}
              </Button>
            </div>
          </form>
        </div>

        {/* Course List */}
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.length > 0 ? (
            filteredCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <img src={course.image} alt={course.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-2">{course.category} - {course.instructor}</p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">{course.status}</p>
                  <Button variant="primary" className="w-full">View Course</Button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
              <p className="text-center text-gray-600 dark:text-gray-400">
                {t('coursesPage.noCoursesFound')}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;