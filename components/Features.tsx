import React from 'react';
import { Section } from './Section';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Smartphone, 
  Monitor, 
  AirVent, 
  Presentation, 
  CheckCircle2
} from 'lucide-react';

const services = [
  { title: "تدريس الشهادة الإعدادية", icon: BookOpen, desc: "تأسيس قوي ومتابعة مكثفة لضمان أعلى المعدلات." },
  { title: "تدريس الشهادة الثانوية", icon: GraduationCap, desc: "الفرع العلمي والأدبي بإشراف نخبة من المدرسين." },
  { title: "صفوف مستقلة", icon: Users, desc: "بيئة مريحة مع صفوف خاصة للإناث وأخرى للذكور." },
  { title: "نظام متابعة إلكتروني", icon: Smartphone, desc: "إرسال العلامات والملاحظات للأهل تلقائياً عبر التطبيق." },
];

const courses = [
  { lang: "العربية", code: "AR" },
  { lang: "الإنكليزية", code: "EN" },
  { lang: "الفرنسية", code: "FR" },
  { lang: "الألمانية", code: "DE" },
];

const facilities = [
  { 
    title: "سبورات تفاعلية ذكية", 
    icon: Presentation,
    image: "images/smart-board.jpg"
  },
  { 
    title: "قاعات مكيفة بالكامل", 
    icon: AirVent,
    image: "images/ac-hall.jpg" 
  },
  { 
    title: "أجهزة عرض (بروجكتور)", 
    icon: Monitor,
    image: "images/projector.jpg"
  },
  { 
    title: "مقاعد مريحة وحديثة", 
    icon: Users,
    image: "images/seats.jpg"
  },
];

const reasons = [
  "خبرة تعليمية تتجاوز 50 عاماً",
  "نخبة من أفضل المدرسين المتخصصين",
  "صفوف مستقلة للذكور والإناث",
  "نظام متابعة إلكتروني حديث",
  "قاعات مجهزة بأحدث الوسائل التعليمية",
  "متابعة أكاديمية دورية لضمان النتائج"
];

interface FeaturesProps {
  view: string;
}

export const Features: React.FC<FeaturesProps> = ({ view }) => {
  return (
    <>
      {/* Services View */}
      {view === 'services' && (
        <Section id="services" title="خدماتنا التعليمية" subtitle="شاملة ومتكاملة لمستقبل أكاديمي واعد">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-lg border-b-4 border-primary hover:border-secondary transition-all hover:-translate-y-2 group"
              >
                <div className="w-14 h-14 bg-light text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <service.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Courses View */}
      {view === 'courses' && (
        <Section id="courses" title="الدورات الخاصة" lightBg>
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-6">دورات اللغات والتقوية</h3>
                <p className="text-gray-600 mb-6">
                  نقدم دورات متخصصة في المحادثة والتقوية لمختلف المواد واللغات العالمية، لتمكين الطلاب من اكتساب مهارات جديدة ورفع مستواهم الدراسي.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {courses.map((c, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 bg-light rounded-lg">
                      <div className="w-10 h-10 bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-bold">
                        {c.code}
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800">اللغة {c.lang}</h4>
                        <p className="text-xs text-gray-500">محادثة وتقوية</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative h-64 md:h-80 overflow-hidden rounded-xl">
                <img src="images/photo_2026-02-17_16-55-15.jpg" alt="قاعات المعهد" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"/>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <p className="text-white font-bold text-lg">استثمر في مستقبلك الآن</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      )}

      {/* Facilities View */}
      {view === 'facilities' && (
        <Section id="facilities" title="مرافق وتجهيزات المعهد">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((item, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="relative group overflow-hidden rounded-xl aspect-[4/3] shadow-md"
              >
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-4 text-center">
                  <item.icon size={40} className="mb-2" />
                  <h4 className="font-bold text-lg">{item.title}</h4>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 group-hover:opacity-0 transition-opacity">
                  <h4 className="text-white font-bold text-center">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* Home View Extras */}
      {view === 'home' && (
        <>
          {/* Staff Preview - Compact */}
          <Section id="staff" title="الكوادر التعليمية" lightBg>
             <div className="text-center max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 leading-relaxed">
                يضم المعهد نخبة من أفضل المدرسين ذوي الخبرة العالية والكفاءة المتميزة في تدريس المناهج، باستخدام أساليب تعليم حديثة تساعد الطلاب على الفهم والتفوق وتحقيق أفضل النتائج.
                </p>
                <div className="mt-8 flex justify-center flex-wrap gap-4">
                   {[1, 2, 3, 4].map(i => (
                      <img key={i} src="images/teacher.jpg" alt="Teacher" className="w-16 h-16 rounded-full border-2 border-secondary shadow-sm object-cover grayscale hover:grayscale-0 transition-all"/>
                   ))}
                </div>
             </div>
          </Section>

          {/* Why Choose Us */}
          <Section title="لماذا تختار معهد علماء المستقبل">
            <div className="bg-primary rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3"></div>
              
              <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12">
                <div>
                  <h3 className="text-3xl font-bold mb-6">التميز هو معيارنا</h3>
                  <p className="text-blue-100 mb-8 text-lg">
                    نحن لا نقدم مجرد دروس، بل نبني مستقبلاً. اهتمامنا بالتفاصيل ومتابعتنا الدقيقة لكل طالب هو ما يميزنا.
                  </p>
                  <a href="#contact" className="inline-block bg-secondary hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-lg">
                    تواصل معنا الآن
                  </a>
                </div>
                <div className="grid gap-4">
                  {reasons.map((reason, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-center gap-3 bg-white/10 p-3 rounded-lg backdrop-blur-sm"
                    >
                      <CheckCircle2 className="text-secondary shrink-0" size={20} />
                      <span className="font-medium">{reason}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </Section>
        </>
      )}
    </>
  );
};