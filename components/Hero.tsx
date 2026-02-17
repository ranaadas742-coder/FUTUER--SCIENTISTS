import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div id="hero" className="relative w-full h-[85vh] md:h-[90vh] bg-gray-900 overflow-hidden flex items-center">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("./hero-bg.jpg")', 
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 to-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="container max-w-7xl mx-auto px-4 md:px-8 relative z-10 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-2/3 text-white space-y-8 mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="bg-secondary px-4 py-1 rounded-full text-sm font-bold mb-4 inline-block">
              الخيار الأول للمتفوقين
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="text-secondary">معهد علماء المستقبل</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-l from-blue-200 to-white">
                خبرة تعليمية تصنع التفوق
              </span>
            </h1>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-200 max-w-2xl leading-relaxed"
          >
            نقدّم تعليماً متميزاً لطلاب الشهادة الإعدادية والثانوية بفرعيها العلمي والأدبي، بإشراف نخبة من أفضل المدرسين وباستخدام أحدث الوسائل التعليمية، مع نظام متابعة إلكتروني متطور.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <a 
              href="https://wa.me/963941166441" 
              target="_blank" 
              rel="noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle size={24} />
              سجل الآن عبر واتساب
            </a>
            <a 
              href="#contact" 
              className="bg-white hover:bg-gray-100 text-primary px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-lg"
            >
              <PhoneCall size={24} />
              تواصل معنا
            </a>
          </motion.div>
        </div>
        
        {/* Floating Abstract Shape/Image on Desktop */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="hidden md:block md:w-1/3 relative"
        >
          <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
             <div className="absolute inset-0 bg-secondary/30 rounded-full blur-3xl animate-pulse"></div>
             <img 
               src="images/students.jpg" 
               alt="طلاب المعهد" 
               className="relative rounded-2xl shadow-2xl border-4 border-white/20 transform rotate-3 hover:rotate-0 transition-all duration-500 object-cover w-full h-full"
             />
          </div>
        </motion.div>
      </div>
    </div>
  );
};