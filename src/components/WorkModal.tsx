import React from 'react';
import { Work } from '../types/Work';
import { X, Calendar, PenTool, BookOpen, FileText } from 'lucide-react';

interface WorkModalProps {
  work: Work | null;
  isOpen: boolean;
  onClose: () => void;
}

const WorkModal: React.FC<WorkModalProps> = ({ work, isOpen, onClose }) => {
  if (!isOpen || !work) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
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
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="px-6 py-6">
            <h2 className="text-2xl font-serif font-bold text-gray-900 mb-3">
              {work.title}
            </h2>
            
            <div className="flex items-center text-sm text-gray-500 mb-6">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(work.datePublished).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </div>
            
            <div className="prose prose-lg max-w-none">
              <div className="text-gray-800 leading-relaxed whitespace-pre-line font-serif">
                {work.content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkModal;