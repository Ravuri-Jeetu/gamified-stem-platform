import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../navigation/Navbar';
import Sidebar from '../navigation/Sidebar';
import Footer from '../navigation/Footer';

const MainLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const isStudent = location.pathname.includes('/student');
  const isTeacher = location.pathname.includes('/teacher');
  
  // Close sidebar on mobile when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname]);

  // Close sidebar when screen size increases
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
      <Navbar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className="flex flex-1">
        {/* Sidebar for authenticated users */}
        {(isStudent || isTeacher) && (
          <Sidebar 
            isOpen={sidebarOpen} 
            setIsOpen={setSidebarOpen}
            userRole={isStudent ? 'student' : 'teacher'}
          />
        )}
        
        {/* Main content */}
        <main className={`flex-1 ${(isStudent || isTeacher) ? 'lg:ml-64' : ''} transition-all duration-300`}>
          <div className="container mx-auto px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default MainLayout;