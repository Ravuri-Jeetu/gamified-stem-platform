import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import Navbar from './components/navigation/Navbar';
import AdminLayout from './components/layouts/AdminLayout';
import AuthLayout from './components/layouts/AuthLayout';
import { AuthProvider } from './contexts/AuthContext';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

// Lazy-loaded pages for better performance
const HomePage = lazy(() => import('./pages/HomePage'));
const RegisterPage = lazy(() => import('./pages/RegisterPage'));
const LoginPage = lazy(() => import('./pages/LoginPage'));
const AIPage = lazy(() => import('./pages/AIPage'));
const CoursesPage = lazy(() => import('./pages/CoursesPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CourseDetailPage = lazy(() => import('./pages/CourseDetailPage'));
const QuizListPage = lazy(() => import('./pages/QuizListPage'));
const QuizDetailPage = lazy(() => import('./pages/QuizDetailPage'));
const LeaderboardPage = lazy(() => import('./pages/LeaderboardPage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const SettingsPage = lazy(() => import('./pages/SettingsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Admin Pages
const AdminDashboard = lazy(() => import('./pages/Admin/AdminDashboard'));
const AdminCourseList = lazy(() => import('./pages/Admin/AdminCourseList'));
const AdminCourseForm = lazy(() => import('./pages/Admin/AdminCourseForm'));
const AdminQuizList = lazy(() => import('./pages/Admin/AdminQuizList'));
const AdminQuizForm = lazy(() => import('./pages/Admin/AdminQuizForm'));
const AdminUserList = lazy(() => import('./pages/Admin/AdminUserList'));
const AdminUserForm = lazy(() => import('./pages/Admin/AdminUserForm'));
const AdminSettings = lazy(() => import('./pages/Admin/AdminSettings'));

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  return (
    <div className="App bg-primary-50 dark:bg-primary-900 dark:text-white min-h-screen">
      <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <Suspense fallback={<div className="loading">Loading...</div>}>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<AuthLayout />}>
                <Route index element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:id" element={<CourseDetailPage />} />
                <Route path="/quizzes" element={<QuizListPage />} />
                <Route path="/quiz/:id" element={<QuizDetailPage />} />
                <Route path="/leaderboard" element={<LeaderboardPage />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/settings" element={<SettingsPage />} />
                <Route path="/ai" element={<AIPage />} />
              </Route>

              {/* Admin Routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="/admin/courses" element={<AdminCourseList />} />
                <Route path="/admin/courses/new" element={<AdminCourseForm />} />
                <Route path="/admin/courses/edit/:id" element={<AdminCourseForm />} />
                <Route path="/admin/quizzes" element={<AdminQuizList />} />
                <Route path="/admin/quizzes/new" element={<AdminQuizForm />} />
                <Route path="/admin/quizzes/edit/:id" element={<AdminQuizForm />} />
                <Route path="/admin/users" element={<AdminUserList />} />
                <Route path="/admin/users/edit/:id" element={<AdminUserForm />} />
                <Route path="/admin/settings" element={<AdminSettings />} />
              </Route>

              {/* Fallback for unknown routes */}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </AuthProvider>
        </I18nextProvider>
      </Suspense>
    </div>
  );
}

export default App;