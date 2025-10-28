
import { useState, useEffect } from 'react';
import Card from '../../../components/base/Card';

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const testimonials = [
    {
      name: 'Andrei P.',
      text: 'A venit la ora stabilită și a rezolvat totul impecabil. Recomand 100%!',
      rating: 5,
      location: 'București, Sector 1'
    },
    {
      name: 'Maria D.',
      text: 'Foarte atent la detalii, explică tot ce face. Profesionist adevărat!',
      rating: 5,
      location: 'București, Sector 3'
    },
    {
      name: 'Cristian M.',
      text: 'Reparație rapidă și curată, preț corect. Îl voi chema din nou cu siguranță.',
      rating: 5,
      location: 'Ilfov, Voluntari'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimoniale" className="py-20 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Ce spun <span className="text-[#007BFF]">clienții</span> noștri
            </h2>
            <p className="text-xl text-gray-600">
              Încrederea clienților noștri este cea mai bună recomandare.
            </p>
          </div>
          
          <div className="relative">
            <Card className="text-center min-h-[300px] flex flex-col justify-center">
              <div className="mb-6">
                <div className="flex justify-center space-x-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <i key={i} className="ri-star-fill text-[#FFD200] text-2xl"></i>
                  ))}
                </div>
                
                <blockquote className="text-2xl md:text-3xl font-medium text-[#1C1C1C] mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="text-lg">
                  <p className="font-bold text-[#007BFF] mb-1">
                    {testimonials[currentTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[currentTestimonial].location}
                  </p>
                </div>
              </div>
            </Card>
            
            <div className="flex justify-center space-x-3 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentTestimonial 
                      ? 'bg-[#007BFF] scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-4 shadow-lg">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-[#FFD200] text-xl"></i>
                ))}
              </div>
              <span className="text-lg font-semibold text-[#1C1C1C]">
                5.0 din 5 stele
              </span>
              <span className="text-gray-600">
                (50+ recenzii)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
