import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-200">
      <Navbar />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;