import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AdminNavbar from '../navigation/AdminNavbar';
import AdminSidebar from '../navigation/AdminSidebar';
import Footer from '../navigation/Footer';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  
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
    <div className="min-h-screen flex flex-col bg-gray-100">
      <AdminNavbar 
        sidebarOpen={sidebarOpen} 
        setSidebarOpen={setSidebarOpen} 
      />
      
      <div className="flex flex-1">
        <AdminSidebar 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
        />
        
        {/* Main content */}
        <main className="flex-1 lg:ml-64 transition-all duration-300 p-4">
          <Outlet />
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminLayout;