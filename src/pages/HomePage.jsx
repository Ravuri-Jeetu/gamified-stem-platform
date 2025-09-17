import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import heroImage from '../assets/hero-image.svg';
// import featureIcon1 from '../assets/feature-icon-1.svg';
// import featureIcon2 from '../assets/feature-icon-2.svg';
// import featureIcon3 from '../assets/feature-icon-3.svg';
import testimonialAvatar from '../assets/testimonial-avatar.svg';
// import Logo from '../components/common/Logo';
// import heroImage from '../assets/hero-image.png';
// import featureIcon1 from '../assets/feature-icon-1.svg';
// import featureIcon2 from '../assets/feature-icon-2.svg';
// import featureIcon3 from '../assets/feature-icon-3.svg';
// import testimonialAvatar from '../assets/testimonial-avatar.jpg';

const HomePage = () => {
  const { t } = useTranslation();

  // Features section data
  const features = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
        </svg>
      ),
      title: t('features.adaptive.title'),
      description: t('features.adaptive.description'),
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      ),
      title: t('features.selfPaced.title'),
      description: t('features.selfPaced.description'),
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 119.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      ),
      title: t('features.collaborative.title'),
      description: t('features.collaborative.description'),
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
        </svg>
      ),
      title: t('features.gamification.title'),
      description: t('features.gamification.description'),
    },
    {
      id: 5,
      icon: (
        <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path>
        </svg>
      ),
      title: t('features.offline.title'),
      description: t('features.offline.description'),
    },
    {
      id: 6,
      icon: (
        <svg className="w-10 h-10 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"></path>
        </svg>
      ),
      title: t('features.multilingual.title'),
      description: t('features.multilingual.description'),
    },
  ];

  // Stats section data
  const stats = [
    { id: 1, value: '10K+', label: t('stats.students') },
    { id: 2, value: '500+', label: t('stats.courses') },
    { id: 3, value: '95%', label: t('stats.completion') },
    { id: 4, value: '15+', label: t('stats.languages') },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-y-0 w-full h-full bg-gradient-to-br from-primary-100 to-secondary-100 transform -skew-y-6 origin-top-left -translate-y-36 z-0 dark:from-primary-800 dark:to-secondary-800"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400">
                  {t('hero.tagline')}
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="block text-gray-900 dark:text-white">{t('hero.title')}</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl dark:text-gray-300">
                {t('hero.description')}
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
                  <Link
                    to="/register"
                    className="inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 dark:bg-secondary-500 dark:hover:bg-secondary-600"
                  >
                    {t('hero.cta.primary')}
                  </Link>
                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center px-5 py-3 border-2 border-accent-500 text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-500 dark:text-white dark:bg-accent-500 dark:hover:bg-accent-600 dark:focus:ring-accent-400 dark:border-accent-400"
                  >
                    {t('hero.cta.secondary')}
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full bg-white rounded-lg overflow-hidden dark:bg-gray-800">
                  <img
                    className="w-full"
                    src={heroImage}
                    alt={t('hero.image.alt')}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-secondary-700 dark:bg-secondary-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              {t('stats.title')}
            </h2>
            <p className="mt-3 text-xl text-secondary-200 sm:mt-4">
              {t('stats.description')}
            </p>
          </div>
          <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col p-6 bg-secondary-800 rounded-lg overflow-hidden dark:bg-secondary-700">
                <dt className="order-2 mt-2 text-lg leading-6 font-medium text-secondary-200">
                  {stat.label}
                </dt>
                <dd className="order-1 text-5xl font-extrabold text-white">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50 overflow-hidden lg:py-24 dark:bg-gray-800">
        <div className="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
          <div className="relative">
            <h2 className="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
              {t('features.title')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500 dark:text-gray-300">
              {t('features.description')}
            </p>
          </div>

          <div className="relative mt-12 lg:mt-16 lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {features.map((feature) => (
              <div key={feature.id} className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-16 w-16 rounded-md bg-white shadow-md dark:bg-gray-700">
                  {feature.icon}
                </div>
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-secondary-700 dark:bg-secondary-800">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">{t('cta.title')}</span>
            </h2>
            <p className="mt-4 text-lg leading-6 text-accent-200 dark:text-accent-300">
              {t('cta.description')}
            </p>
          <Link
                to="/register"
                className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 text-base font-medium rounded-md text-white bg-accent-600 hover:bg-accent-700 sm:w-auto dark:text-white dark:bg-accent-500 dark:hover:bg-accent-600"
              >
                {t('cta.button')}
              </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-secondary-50 py-16 lg:py-24 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">
              {t('testimonials.title')}
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              {t('testimonials.description')}
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-8 shadow-sm dark:bg-gray-700">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center dark:bg-primary-800">
                    <img
                      className="relative rounded-full"
                      src={testimonialAvatar}
                      width={96}
                      height={96}
                      alt={t(`testimonials.items.${i}.name`)}
                    />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">{t(`testimonials.items.${i}.name`)}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{t(`testimonials.items.${i}.role`)}</p>
                  </div>
                </div>
                <p className="mt-4 text-base text-gray-500 dark:text-gray-300">
                  {t(`testimonials.items.${i}.quote`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;