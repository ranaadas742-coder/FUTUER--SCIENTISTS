import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'الرئيسية', id: 'home' },
    { name: 'من نحن', id: 'about' },
    { name: 'خدماتنا', id: 'services' },
    { name: 'الدورات', id: 'courses' },
    { name: 'المرافق', id: 'facilities' },
    { name: 'تواصل معنا', id: 'contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 px-4 text-center text-sm md:text-base font-medium z-50 relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          خصم 50% للمسجلين ليوم الإعلان فقط – المقاعد محدودة
        </motion.div>
      </div>

      {/* Navbar */}
      <header 
        className={`sticky top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
          {/* Logo Area */}
          <button 
            onClick={() => onNavigate('home')} 
            className="flex items-center gap-3 group text-right"
          >
            <img 
              src="images/logo.png" 
              alt="شعار معهد علماء المستقبل" 
              className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => {
                e.currentTarget.style.display = 'none'; 
              }}
            />
            <div className="flex flex-col items-start">
              <span className="text-xl md:text-2xl font-bold text-secondary group-hover:text-primary transition-colors">معهد علماء المستقبل</span>
              <span className="text-xs text-gray-500 font-medium hidden md:block">خبرة تصنع التفوق</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button 
                key={link.id} 
                onClick={() => onNavigate(link.id)}
                className={`font-semibold transition-colors relative after:content-[''] after:absolute after:h-0.5 after:left-0 after:-bottom-1 after:transition-all hover:after:w-full ${
                  currentPage === link.id 
                    ? 'text-primary after:w-full after:bg-primary' 
                    : 'text-gray-700 hover:text-primary after:w-0 after:bg-secondary'
                }`}
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* Call Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a 
              href="tel:0941166441" 
              className="hidden lg:flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all font-bold text-sm"
            >
              <Phone size={18} />
              <span>0941166441</span>
            </a>
            
            <button 
              className="md:hidden text-primary p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-xl"
            >
              <nav className="flex flex-col p-4 gap-4">
                {navLinks.map((link) => (
                  <button 
                    key={link.id} 
                    onClick={() => {
                      onNavigate(link.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`font-semibold p-2 rounded-lg transition-colors flex items-center justify-between ${
                      currentPage === link.id
                        ? 'bg-primary/5 text-primary'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-primary'
                    }`}
                  >
                    {link.name}
                    <span className="text-secondary text-xl">›</span>
                  </button>
                ))}
                <div className="border-t pt-4 mt-2">
                   <p className="text-sm text-gray-500 mb-2 flex items-center gap-2"><MapPin size={16}/> المرديان – مقابل جسر الإنشاءات العسكرية</p>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};