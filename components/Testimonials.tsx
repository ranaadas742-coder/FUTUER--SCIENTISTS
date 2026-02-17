import React from 'react';
import { Section } from './Section';
import { Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    text: "أفضل معهد ساعدني على التفوق الدراسي والحصول على العلامة التامة في الرياضيات.",
    author: "أحمد س.",
    role: "طالب بكالوريا علمي"
  },
  {
    text: "متابعة ممتازة واهتمام كبير بالطلاب، تطبيق الموبايل ريحنا كتير بمتابعة مستوى ابني.",
    author: "أم محمد",
    role: "ولية أمر"
  },
  {
    text: "مدرسون على مستوى عالٍ من الاحتراف، والبيئة في المعهد مريحة جداً للدراسة.",
    author: "سارة ك.",
    role: "طالبة تاسع"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials" title="آراء طلابنا وأولياء الأمور" lightBg>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white p-8 rounded-2xl shadow-lg relative border border-gray-100"
          >
            <Quote className="text-secondary/20 absolute top-4 left-4 w-12 h-12" />
            <p className="text-gray-600 mb-6 relative z-10 leading-relaxed">
              "{item.text}"
            </p>
            <div className="flex items-center gap-3 border-t pt-4">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                {item.author.charAt(0)}
              </div>
              <div>
                <h5 className="font-bold text-gray-800">{item.author}</h5>
                <p className="text-xs text-secondary font-medium">{item.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};