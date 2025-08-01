import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BookOpen, Feather } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="bg-white border-b border-sage-200 sticky top-0 z-10 shadow-sm">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2 text-sage-800 hover:text-sage-600 transition-colors">
            <Feather className="h-6 w-6" />
            <span className="text-xl font-serif font-semibold">Darul Aman Edavannappara</span>
          </Link>
          
          <nav className="flex space-x-8">
            <Link 
              to="/" 
              className={`text-sm font-serif transition-colors ${
                location.pathname === '/' 
                  ? 'text-sage-800 border-b-2 border-sage-300' 
                  : 'text-sage-600 hover:text-sage-800'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/works" 
              className={`text-sm font-serif transition-colors flex items-center space-x-1 ${
                location.pathname === '/works' 
                  ? 'text-sage-800 border-b-2 border-sage-300' 
                  : 'text-sage-600 hover:text-sage-800'
              }`}
            >
              <BookOpen className="h-4 w-4" />
              <span>All Works</span>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;