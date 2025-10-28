
export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleManageCookies = () => {
    // Dispatch custom event pentru a redeschide bannerul de cookie-uri
    window.dispatchEvent(new CustomEvent('manageCookies'));
  };

  return (
    <footer className="bg-[#1C1C1C] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Logo & Description */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-[#007BFF] rounded-lg">
                  <i className="ri-flashlight-line text-white text-lg"></i>
                </div>
                <span className="text-xl font-bold" style={{ fontFamily: '"Pacifico", serif' }}>
                  ElectroFix
                </span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Servicii profesionale de instalații și reparații electrice pentru case, apartamente și spații comerciale. 
                Rapid, sigur și certificat.
              </p>
              <div className="flex items-center space-x-2 text-[#FFD200]">
                <i className="ri-shield-check-line"></i>
                <span className="text-sm">Electrician autorizat ANRE</span>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-4">Navigare rapidă</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => scrollToSection('despre')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Despre noi
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('servicii')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Servicii
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('testimoniale')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Testimoniale
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('contact')}
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <a 
                    href="/politica-confidentialitate"
                    className="text-gray-300 hover:text-[#007BFF] transition-colors cursor-pointer"
                  >
                    Politica de Confidențialitate
                  </a>
                </li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <i className="ri-phone-line text-[#007BFF]"></i>
                  <a href="tel:0723000111" className="text-gray-300 hover:text-white">
                    0723 000 111
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <i className="ri-mail-line text-[#007BFF]"></i>
                  <a href="mailto:contact@electrofix.ro" className="text-gray-300 hover:text-white">
                    contact@electrofix.ro
                  </a>
                </div>
                <div className="flex items-start space-x-2">
                  <i className="ri-map-pin-line text-[#007BFF] mt-1"></i>
                  <span className="text-gray-300">
                    București, Strada Energiei nr. 22
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cookie Management */}
          <div className="border-t border-gray-700 pt-6 pb-2">
            <div className="flex justify-center">
              <button
                onClick={handleManageCookies}
                className="text-gray-400 hover:text-[#007BFF] transition-colors text-sm cursor-pointer"
              >
                Administrează consimțământul cookie-urilor
              </button>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © 2025 ElectroFix – Toate drepturile rezervate
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-gray-400 text-sm">Design by</span>
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-[#007BFF] hover:text-[#FFD200] transition-colors text-sm font-medium"
                >
                  Powered by Readdy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
