import React from 'react';
import { LayoutProps } from '@/utils/props';
import { Navbar } from './';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-400 font-sans-serif">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;