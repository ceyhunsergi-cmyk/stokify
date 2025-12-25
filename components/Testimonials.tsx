import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';
import FadeIn from './FadeIn';

const Testimonials: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-blue text-center mb-16">
            İşletmeler ne diyor?
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <div className="bg-[#F6F7F9] p-8 rounded-2xl relative h-full">
                <Quote className="absolute top-8 left-8 text-brand-blue/10" size={48} />
                <p className="text-brand-text relative z-10 mb-8 pt-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author} 
                    className="w-12 h-12 rounded-full object-cover bg-gray-200"
                  />
                  <div>
                    <h4 className="font-bold text-brand-blue text-sm">{testimonial.author}</h4>
                    <p className="text-xs text-brand-muted">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;