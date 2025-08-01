import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import WorksPage from './components/WorksPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/works" element={<WorksPage />} />
          </Routes>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-sage-200 py-8 mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-gray-600 text-sm">
              © 2024 Darul Aman Edavannappara Islamic Integrated Academy. Nurturing hearts and minds through Islamic education.
            </p>
            <div className="mt-4 text-xs text-gray-500">
              <p>Bismillah • QR Code Friendly • Mobile Optimized • Print Ready</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;