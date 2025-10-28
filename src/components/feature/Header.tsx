
import { useState } from 'react';
import ContactModal from './ContactModal';

export default function Header() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-[#007BFF]" style={{ fontFamily: '"Pacifico", serif' }}>
                ElectroFix
              </h1>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <button 
                onClick={() => scrollToSection('despre')}
                className="text-[#1C1C1C] hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                Despre
              </button>
              <button 
                onClick={() => scrollToSection('servicii')}
                className="text-[#1C1C1C] hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                Servicii
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-[#1C1C1C] hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                Avantaje
              </button>
              <button 
                onClick={() => scrollToSection('testimoniale')}
                className="text-[#1C1C1C] hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                Recenzii
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-[#1C1C1C] hover:text-[#007BFF] transition-colors cursor-pointer"
              >
                Contact
              </button>
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg bg-[#007BFF] text-white hover:bg-blue-600 shadow-md px-4 py-2 text-sm"
              >
                Solicită intervenție
              </button>
            </nav>

            <button className="md:hidden text-[#1C1C1C] hover:text-[#007BFF] transition-colors">
              <i className="ri-menu-line text-2xl"></i>
            </button>
          </div>
        </div>
      </header>

      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </>
  );
}
