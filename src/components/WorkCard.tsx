import React from 'react';
import { Work } from '../types/Work';
import { Calendar, BookOpen, PenTool, FileText } from 'lucide-react';

interface WorkCardProps {
  work: Work;
  onClick: () => void;
}

const WorkCard: React.FC<WorkCardProps> = ({ work, onClick }) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'poetry':
        return <PenTool className="h-4 w-4" />;
      case 'books':
        return <BookOpen className="h-4 w-4" />;
      case '':
        return <FileText className="h-4 w-4" />;
      default:
        return <BookOpen className="h-4 w-4" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'poetry':
        return 'bg-rose-100 text-rose-700';
      case 'books':
        return 'bg-blue-100 text-blue-700';
      case '':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-sage-200 hover:border-sage-300 p-6 h-full flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(work.category)}`}>
          {getCategoryIcon(work.category)}
          <span className="ml-1 capitalize">{work.category}</span>
        </span>
        {work.featured && (
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sage-100 text-sage-700">
            Featured
          </span>
        )}
      </div>
      
      <h3 className="text-xl font-serif font-semibold text-gray-900 mb-2 line-clamp-2">
        {work.title}
      </h3>
      
      <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
        Author : {work.Author}
      </p>

      {work.imageUrl && (
        <img 
          src={work.imageUrl} 
          alt={work.title} 
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
      )}
      
      <div className="flex items-center text-xs text-gray-500 mt-auto">
        <Calendar className="h-3 w-3 mr-1" />
        {new Date(work.datePublished).toLocaleDateString('en-US', { 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  );
};

export default WorkCard;