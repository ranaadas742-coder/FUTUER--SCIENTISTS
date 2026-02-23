import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { Award, Users, TrendingUp, UserCheck, BookOpen, Clock } from 'lucide-react';
import { StatItem } from '../types';

// Cast to any to avoid TS errors with current framer-motion version
const MotionDiv = motion.div as any;

const stats: StatItem[] = [
  { label: 'عاماً من الخبرة', value: '+50', icon: Clock },
  { label: 'طالب وطالبة', value: '+10,000', icon: Users },
  { label: 'نسبة النجاح', value: '95%', icon: TrendingUp },
  { label: 'من ثقة الأهالي', value: '100%', icon: UserCheck },
];

export const AboutAndStats: React.FC = () => {
  return (
    <>
      <Section id="about" title="من نحن" lightBg>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <MotionDiv 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-lg text-gray-700 leading-relaxed"
          >
            <p>
              يُعد <strong className="text-secondary">معهد علماء المستقبل</strong> من المؤسسات التعليمية الرائدة بخبرة تتجاوز 50 عاماً في مجال التعليم، حيث نلتزم بتقديم أفضل مستوى تعليمي لطلابنا.
            </p>
            <p>
              نوفّر بيئة تعليمية متكاملة تعتمد على أحدث الوسائل التعليمية، ونضم نخبة من أفضل الكوادر التعليمية من المدرسين المتخصصين ذوي الخبرة والكفاءة العالية.
            </p>
            <p>
              نهدف إلى تقديم تعليم متميز ومتابعة أكاديمية مستمرة للطلاب، مع توفير <span className="text-secondary font-bold">نظام متابعة إلكتروني حديث</span> يتيح للأهل الاطلاع على العلامات والتقييمات بشكل دوري وشهري عبر التطبيق.
            </p>
            
            <div className="flex gap-4 pt-4">
              <div className="flex items-center gap-2 text-primary font-bold">
                <BookOpen className="text-secondary" />
                <span>مناهج متطورة</span>
              </div>
              <div className="flex items-center gap-2 text-primary font-bold">
                <Award className="text-secondary" />
                <span>جودة تعليمية</span>
              </div>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800" 
              alt="طلاب المعهد" 
              className="rounded-lg shadow-2xl w-full object-cover h-80"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-xl border-t-4 border-secondary max-w-xs hidden md:block">
              <p className="font-bold text-primary text-lg">تميز أكاديمي</p>
              <p className="text-gray-500 text-sm">نصنع قادة المستقبل بالعلم والمعرفة</p>
            </div>
          </MotionDiv>
        </div>
      </Section>

      {/* Stats Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h2>
            <div className="w-16 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <MotionDiv 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors duration-300">
                  <stat.icon size={32} className="text-white" />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};