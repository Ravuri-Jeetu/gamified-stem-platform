import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import Logo from '../components/common/Logo';

const CourseDetailPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

  // Placeholder for course data - in a real application, this would come from an API call
  const course = {
    id: id,
    title: t('courseDetailPage.title'),
    description: t('courseDetailPage.description'),
    instructor: t('courseDetailPage.instructor'),
    duration: t('courseDetailPage.duration'),
    difficulty: t('courseDetailPage.difficulty'),
    lessons: 10,
    quizzes: 3,
    resources: 5,
    reviews: 4.5,
    whatYouWillLearn: [
      'Learn the basics of React',
      'Build a functional web application',
      'Understand state management'
    ],
    courseContent: [
      { title: 'Introduction to React', duration: '1h 30m' },
      { title: 'Components and Props', duration: '2h 0m' },
      { title: 'State and Lifecycle', duration: '2h 30m' }
    ],
    requirements: [
      'Basic understanding of HTML, CSS, and JavaScript',
      'A computer with internet access'
    ],
    faq: [
      { question: 'What is React?', answer: 'React is a JavaScript library for building user interfaces.' },
      { question: 'Is this course for beginners?', answer: 'Yes, this course is designed for beginners.' }
    ],
    relatedCourses: [
      { id: 2, title: 'Advanced React' },
      { id: 3, title: 'React Native Development' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-white dark:bg-gray-800 shadow-lg rounded-lg p-8 space-y-8">
        <div className="flex justify-center mb-6">
          <img src={Logo} alt="EduQuest Logo" className="h-16" />
        </div>
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-4">
          {course.title}
        </h1>
        <p className="text-center text-lg text-gray-700 dark:text-gray-300 mb-6">
          {course.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-center mb-8">
          <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-300">{t('courseDetailPage.instructor')}</h3>
            <p className="text-gray-800 dark:text-gray-200">{course.instructor}</p>
          </div>
          <div className="bg-green-50 dark:bg-green-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-green-700 dark:text-green-300">{t('courseDetailPage.duration')}</h3>
            <p className="text-gray-800 dark:text-gray-200">{course.duration}</p>
          </div>
          <div className="bg-yellow-50 dark:bg-yellow-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-yellow-700 dark:text-yellow-300">{t('courseDetailPage.difficulty')}</h3>
            <p className="text-gray-800 dark:text-gray-200">{course.difficulty}</p>
          </div>
          <div className="bg-red-50 dark:bg-red-900 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-red-700 dark:text-red-300">{t('courseDetailPage.reviews')}</h3>
            <p className="text-gray-800 dark:text-gray-200">{course.reviews} / 5</p>
          </div>
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-300">
          {t('courseDetailPage.enrollNow')}
        </button>

        <section className="space-y-6">
          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('courseDetailPage.whatYouWillLearn')}</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {course.whatYouWillLearn.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('courseDetailPage.courseContent')}</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {course.courseContent.map((item, index) => (
                <li key={index}>{item.title} ({item.duration})</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('courseDetailPage.requirements')}</h2>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
              {course.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('courseDetailPage.faq')}</h2>
            <div className="space-y-4">
              {course.faq.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{item.question}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-3">{t('courseDetailPage.relatedCourses')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {course.relatedCourses.map((item, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{item.title}</h3>
                  {/* Link to course detail page */}
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CourseDetailPage;