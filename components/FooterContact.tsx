import React from 'react';
import { Phone, MapPin, Facebook, MessageCircle, Map as MapIcon, ChevronRight } from 'lucide-react';

export const FooterContact: React.FC = () => {
  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 relative bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-primary/90 z-0"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">تواصل معنا</h2>
            <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Info */}
            <div className="space-y-8">
              <div className="bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="text-secondary" />
                  العنوان
                </h3>
                <p className="text-xl mb-2">المرديان – مقابل جسر الإنشاءات العسكرية</p>
                <a 
                  href="https://maps.app.goo.gl/hgUVbV7JVXGf7tb97" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-secondary font-bold hover:text-white transition-colors mt-2 border border-secondary px-4 py-2 rounded-lg hover:bg-secondary"
                >
                  <MapIcon size={18} />
                  عرض الموقع على الخريطة
                </a>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <a 
                  href="https://wa.me/963941166441" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#25D366] hover:bg-[#20bd5a] p-4 rounded-xl flex items-center justify-center gap-3 transition-colors text-white font-bold text-lg shadow-lg"
                >
                  <MessageCircle size={24} />
                  واتساب
                </a>
                <a 
                  href="https://www.facebook.com/share/1AvN9VSqmY/" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-[#1877F2] hover:bg-[#166fe5] p-4 rounded-xl flex items-center justify-center gap-3 transition-colors text-white font-bold text-lg shadow-lg"
                >
                  <Facebook size={24} />
                  فيسبوك
                </a>
              </div>

              <div className="flex items-center justify-center gap-3 text-2xl font-bold bg-white/5 p-4 rounded-xl">
                <Phone className="text-secondary" />
                <span dir="ltr">0941166441</span>
              </div>
            </div>

            {/* Map Preview Image (Static placeholder acting as link) */}
            <a 
              href="https://maps.app.goo.gl/hgUVbV7JVXGf7tb97"
              target="_blank"
              rel="noreferrer" 
              className="block rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 h-80 relative group"
            >
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800" 
                alt="خريطة الموقع" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/20 transition-colors">
                 <div className="bg-white text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2">
                    <MapPin className="text-secondary"/>
                    افتح خرائط جوجل
                 </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div>
              <div className="mb-6 flex items-center gap-3">
                 <div className="bg-white p-2 rounded-lg w-16 h-16 flex items-center justify-center shrink-0">
                    <img 
                      src="https://cdn-icons-png.flaticon.com/512/2997/2997300.png" 
                      alt="شعار المعهد" 
                      className="w-full h-full object-contain"
                    />
                 </div>
                 <h3 className="text-2xl font-bold text-white">معهد علماء المستقبل</h3>
              </div>
              <p className="mb-4 text-sm leading-relaxed">
                نصنع مستقبلاً تعليمياً مشرقاً لأبنائنا من خلال بيئة تعليمية متميزة وكادر تدريسي محترف.
              </p>
              <div className="flex gap-2">
                <a href="https://www.facebook.com/share/1AvN9VSqmY/" className="w-10 h-10 bg-gray-800 hover:bg-[#1877F2] rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">روابط سريعة</h4>
              <ul className="space-y-2">
                {['الرئيسية', 'من نحن', 'الخدمات', 'الدورات', 'تواصل معنا'].map((link, idx) => (
                  <li key={idx}>
                    <a href={`#${link === 'الرئيسية' ? 'hero' : link === 'تواصل معنا' ? 'contact' : 'services'}`} className="hover:text-secondary transition-colors flex items-center gap-1 text-sm">
                      <ChevronRight size={14} className="text-secondary" /> {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info Footer */}
            <div>
              <h4 className="text-white font-bold text-lg mb-4">معلومات الاتصال</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="text-secondary shrink-0 mt-1" size={18} />
                  <span>المرديان – مقابل جسر الإنشاءات العسكرية</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-secondary shrink-0" size={18} />
                  <span dir="ltr">0941166441</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} معهد علماء المستقبل. جميع الحقوق محفوظة.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/963941166441" 
        target="_blank" 
        rel="noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:scale-110 transition-all animate-bounce duration-[2000ms]"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={32} fill="white" className="text-white" />
        <span className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-ping"></span>
      </a>
    </>
  );
};