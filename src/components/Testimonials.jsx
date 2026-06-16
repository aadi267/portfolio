import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';

const testimonials = [
  {
    id: 1,
    name: "Sarah Chen",
    role: "Engineering Manager",
    company: "Fintech Co",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    text: "Aditya brings sharp product sense and a relentless focus on the user. He turned ambiguous problems into clear roadmaps and shipped features that moved the metrics that mattered.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Head of Product",
    company: "StartupX",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    text: "Aditya is data-driven to the core. His experiments and funnel work consistently lifted conversion and revenue, and he's a great partner to design and engineering.",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Johnson",
    role: "Design Lead",
    company: "FinTech Solutions",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    text: "Aditya's user research and clarity of thinking make collaboration effortless. He understands customer needs deeply and translates them into products that actually ship.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-20 bg-transparent overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className={`${styles.sectionSubText} text-cyan-400`}>What others say</p>
          <h2 className={`${styles.sectionHeadText} bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500`}>
            Testimonials
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-slate-700/50"
            >
              <div className="flex flex-col md:flex-row gap-6">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-24 h-24 rounded-full border-4 border-cyan-400/30"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Quote */}
                  <div className="relative">
                    <span className="text-6xl text-cyan-400/20 absolute -top-4 -left-2">"</span>
                    <p className="text-slate-300 text-lg italic relative z-10 pl-8">
                      {testimonials[currentIndex].text}
                    </p>
                    <span className="text-6xl text-cyan-400/20 absolute -bottom-8 right-0">"</span>
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mt-4 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="text-yellow-400 text-xl"
                      >
                        ⭐
                      </motion.span>
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <h4 className="text-white font-bold text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-cyan-400">{testimonials[currentIndex].role}</p>
                    <p className="text-slate-400 text-sm">{testimonials[currentIndex].company}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors"
            >
              ←
            </motion.button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-cyan-400'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center text-white hover:bg-slate-700/50 transition-colors"
            >
              →
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionWrapper(Testimonials, "testimonials");