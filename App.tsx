import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { AboutAndStats } from './components/AboutAndStats';
import { Features } from './components/Features';
import { Testimonials } from './components/Testimonials';
import { FooterContact } from './components/FooterContact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        {/* الصفحة الرئيسية */}
        {currentPage === 'home' && (
          <>
            <Hero />
            <Features view="home" />
            <Testimonials />
          </>
        )}

        {/* صفحة من نحن */}
        {currentPage === 'about' && (
          <div className="pt-8 animate-fade-in">
            <AboutAndStats />
          </div>
        )}

        {/* صفحة الخدمات */}
        {currentPage === 'services' && (
           <div className="pt-8 animate-fade-in">
             <Features view="services" />
           </div>
        )}

        {/* صفحة الدورات */}
        {currentPage === 'courses' && (
           <div className="pt-8 animate-fade-in">
             <Features view="courses" />
           </div>
        )}

        {/* صفحة تواصل معنا - تترك المحتوى فارغاً ليظهر الفوتر مباشرة في الأعلى */}
        {currentPage === 'contact' && (
           <div className="hidden"></div>
        )}
      </main>

      <FooterContact />
    </div>
  );
}

export default App;