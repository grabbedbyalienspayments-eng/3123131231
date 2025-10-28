
import Button from '../../../components/base/Button';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 123, 255, 0.1), rgba(0, 123, 255, 0.2)), url('https://readdy.ai/api/search-image?query=Professional%20electrician%20working%20with%20electrical%20wires%20and%20cables%20in%20modern%20setting%2C%20warm%20lighting%2C%20organized%20workspace%2C%20subtle%20electrical%20sparks%20in%20background%20blur%2C%20clean%20and%20professional%20atmosphere%2C%20high%20quality%20photography%2C%20modern%20electrical%20tools%20and%20equipment%20visible&width=1920&height=1080&seq=hero-electrofix&orientation=landscape')`
      }}
    >
      <div className="container mx-auto px-4 py-20">
        <div className="w-full max-w-4xl mx-auto text-center">
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold text-[#1C1C1C] mb-6 leading-tight">
              Curent de încredere.<br />
              <span className="text-[#007BFF]">Soluții electrice</span> pentru siguranța ta.
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Servicii profesionale de instalații și reparații electrice pentru case, apartamente și spații comerciale. 
              Rapid, sigur și certificat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto"
              >
                <i className="ri-phone-line mr-2"></i>
                Solicită o intervenție
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('servicii')}
                className="w-full sm:w-auto"
              >
                <i className="ri-service-line mr-2"></i>
                Vezi serviciile noastre
              </Button>
            </div>
            
            <div className="flex items-center justify-center text-sm text-gray-500 bg-[#F4F5F7] rounded-xl p-4">
              <i className="ri-shield-check-line text-[#007BFF] mr-2"></i>
              <span className="font-medium">Electrician autorizat ANRE | Disponibil 24/7 în București și împrejurimi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
