import React, { useState, useMemo } from 'react';
import { works } from '../data/works';
import { Work } from '../types/Work';
import WorkCard from './WorkCard';
import WorkModal from './WorkModal';
import { Search, Filter, BookOpen, PenTool } from 'lucide-react';

const WorksPage: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWorks = useMemo(() => {
    return works.filter(work => {
      const matchesCategory = selectedCategory === 'all' || work.category === selectedCategory;
      const matchesSearch = work.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           work.Author.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  const categories = [
    { value: 'all', label: 'All Literature', icon: BookOpen },
    { value: 'poetry', label: 'Poetry', icon: PenTool },
    { value: 'books', label: 'books', icon: BookOpen }
  ];

  const getCategoryCount = (category: string) => {
    if (category === 'all') return works.length;
    return works.filter(work => work.category === category).length;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-900 mb-4">
            Islamic Literary Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of Islamic poetry, inspiring stories, and scholarly s. 
            Use the filters and search to find pieces that resonate with your heart and mind.
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border border-sage-200">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search Islamic literature by title or content..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const Icon = category.icon;
                  return (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`inline-flex items-center px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-sage-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="h-4 w-4 mr-1" />
                      {category.label}
                      <span className="ml-1 text-xs opacity-75">
                        ({getCategoryCount(category.value)})
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            {filteredWorks.length === 0 ? (
              'No literature found matching your criteria.'
            ) : (
              <>
                Showing {filteredWorks.length} of {works.length} pieces
                {searchQuery && ` for "${searchQuery}"`}
                {selectedCategory !== 'all' && ` in ${selectedCategory}`}
              </>
            )}
          </p>
        </div>

        {/* Works Grid */}
        {filteredWorks.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredWorks.map((work) => (
              <WorkCard
                key={work.id}
                work={work}
                onClick={() => handleWorkClick(work)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No literature found</h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="text-sage-600 hover:text-sage-800 font-medium"
            >
              Clear all filters
            </button>
          </div>
        )}

        <WorkModal 
          work={selectedWork} 
          isOpen={isModalOpen} 
          onClose={closeModal} 
        />
      </div>
    </div>
  );
};

export default WorksPage;