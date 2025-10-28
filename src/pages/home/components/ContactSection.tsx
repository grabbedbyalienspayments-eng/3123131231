
import { useState } from 'react';
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function ContactSection() {
  const handleCallClick = () => {
    window.location.href = 'tel:0723000111';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/40723000111?text=Bună%20ziua!%20Aș%20dori%20să%20solicit%20o%20intervenție%20electrică.', '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1C1C1C] mb-4">Contactează-ne</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Suntem disponibili oricând ai nevoie de ajutor. Trimite-ne un mesaj, sună sau vizitează-ne.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-map-pin-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Adresa</h3>
                <p className="text-gray-600">București, Strada Energiei nr. 22</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-phone-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Telefon</h3>
                <p className="text-gray-600">0723 000 111</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-mail-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Email</h3>
                <p className="text-gray-600">contact@electrofix.ro</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#007BFF] rounded-2xl flex items-center justify-center flex-shrink-0">
                <i className="ri-time-line text-white text-xl"></i>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1C1C1C] mb-2">Program</h3>
                <p className="text-gray-600">Luni–Sâmbătă 08:00–20:00</p>
                <p className="text-[#007BFF] font-medium">Urgențe: 24/7</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <button 
                onClick={handleCallClick}
                className="whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg bg-[#007BFF] text-white hover:bg-blue-600 shadow-md px-8 py-4 text-lg flex-1"
              >
                <i className="ri-phone-fill mr-2"></i>
                Sună acum
              </button>
              <button 
                onClick={handleWhatsAppClick}
                className="whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg bg-[#FFD200] text-[#1C1C1C] hover:bg-yellow-400 shadow-md px-8 py-4 text-lg flex-1"
              >
                <i className="ri-whatsapp-line mr-2"></i>
                WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-[#F4F5F7] rounded-2xl p-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8!2d26.1025!3d44.4268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDI1JzM2LjUiTiAyNsKwMDYnMDkuMCJF!5e0!3m2!1sen!2sro!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '1rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Locația ElectroFix"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
