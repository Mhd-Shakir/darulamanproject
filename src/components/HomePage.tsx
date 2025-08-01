import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { works } from '../data/works';
import { ArrowRight, BookOpen, PenTool, Coffee, FileText } from 'lucide-react';
import WorkModal from './WorkModal';
import { Work } from '../types/Work';

const HomePage: React.FC = () => {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const featuredWork = works?.find(work => work.featured) || works?.[0];

  const handleWorkClick = (work: Work) => {
    setSelectedWork(work);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWork(null);
  };

  if (!works || works.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-600">
        No works found. Please add some content to display.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <BookOpen className="h-12 w-12 text-sage-600" />
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-gray-900 mb-6">
            Darul Aman Edavannappara
          </h1>
          <h2 className="text-xl sm:text-2xl font-serif text-sage-700 mb-6">
            Islamic Integrated Academy
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Nurturing hearts and minds through Islamic education. A place where knowledge meets faith, 
            where students discover the beauty of Islam through literature, poetry, and scholarly reflection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/works"
              className="inline-flex items-center px-6 py-3 bg-sage-600 text-white font-medium rounded-lg hover:bg-sage-700 transition-colors shadow-md hover:shadow-lg"
            >
              <BookOpen className="h-5 w-5 mr-2" />
              Explore All Works
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
            <button
              onClick={() => featuredWork && handleWorkClick(featuredWork)}
              className="inline-flex items-center px-6 py-3 bg-white text-sage-700 font-medium rounded-lg border-2 border-sage-200 hover:border-sage-300 transition-colors shadow-md hover:shadow-lg"
            >
              <PenTool className="h-5 w-5 mr-2" />
              Read Featured Piece
            </button>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">
            Featured Islamic Literature
          </h2>

          {featuredWork && (
            <div className="bg-gradient-to-br from-sage-50 to-cream-50 rounded-xl p-8 shadow-lg border border-sage-200">
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-sage-100 text-sage-700">
                  <PenTool className="h-4 w-4 mr-1" />
                  Featured {featuredWork.category === 'poetry' ? 'Poetry' : featuredWork.category === 'books' ? 'Story' : ''}
                </span>
                <span className="text-sm text-gray-500">
                  {featuredWork.datePublished &&
                    new Date(featuredWork.datePublished).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">
                {featuredWork.title}
              </h3>

              <p className="text-gray-700 text-lg leading-relaxed mb-6">
                {featuredWork.excerpt}
              </p>

              <button
                onClick={() => handleWorkClick(featuredWork)}
                className="inline-flex items-center text-sage-600 hover:text-sage-800 font-medium transition-colors"
              >
                Read Complete Piece
                <ArrowRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          )}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-6">
            About Our Academy
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            Welcome to Darul Aman Edavannappara Islamic Integrated Academy, where we nurture both 
            academic excellence and spiritual growth. Our literary collection features Islamic poetry, 
            inspiring stories, and thoughtful s that reflect our commitment to holistic education. 
            Each piece is crafted to inspire, educate, and strengthen the connection between knowledge 
            and faith, guiding students on their journey toward becoming righteous servants of Allah.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <PenTool className="h-8 w-8 text-sage-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Islamic Poetry</h3>
              <p className="text-gray-600 text-sm">
                Verses inspired by Quranic teachings and Islamic spirituality
              </p>
            </div>
            <div className="text-center">
              <BookOpen className="h-8 w-8 text-sage-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Inspiring Stories</h3>
              <p className="text-gray-600 text-sm">
                Tales that illuminate Islamic values and moral teachings
              </p>
            </div>
            <div className="text-center">
              <FileText className="h-8 w-8 text-sage-600 mx-auto mb-3" />
              <h3 className="font-serif font-semibold text-gray-900 mb-2">Scholarly s</h3>
              <p className="text-gray-600 text-sm">
                Thoughtful reflections on Islamic education and spirituality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      <WorkModal work={selectedWork} isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default HomePage;
