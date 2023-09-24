import React from 'react';
import { LayoutProps } from '@/utils/props';
import { Navbar } from './';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="font-sans-serif">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
