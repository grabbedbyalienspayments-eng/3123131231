
import Card from '../../../components/base/Card';
import Button from '../../../components/base/Button';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-home-wifi-line',
      title: 'Instalații electrice complete',
      description: 'Montaj și refacere instalații electrice pentru apartamente, case și birouri, conform normelor în vigoare.',
      color: '#007BFF'
    },
    {
      icon: 'ri-tools-line',
      title: 'Reparații și intervenții rapide',
      description: 'Înlocuire prize, siguranțe, întrerupătoare, diagnosticare și rezolvare defecțiuni urgente.',
      color: '#FFD200'
    },
    {
      icon: 'ri-dashboard-line',
      title: 'Modernizări & tablouri electrice',
      description: 'Upgrade la sisteme moderne de siguranță, montaj tablouri automate și protecții suplimentare.',
      color: '#007BFF'
    },
    {
      icon: 'ri-search-eye-line',
      title: 'Consultanță și verificări periodice',
      description: 'Evaluare profesională a instalației electrice, recomandări de siguranță și optimizare energetică.',
      color: '#FFD200'
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="servicii" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Serviciile <span className="text-[#007BFF]">Noastre</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferim soluții complete pentru toate nevoile tale electrice, de la instalări noi la reparații urgente.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <Card key={index} hover className="text-center group">
                <div 
                  className="w-16 h-16 flex items-center justify-center mx-auto mb-6 rounded-2xl transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${service.color}20` }}
                >
                  <i 
                    className={`${service.icon} text-3xl`}
                    style={{ color: service.color }}
                  ></i>
                </div>
                
                <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                
                <div 
                  className="w-12 h-1 mx-auto mt-6 rounded-full transition-all duration-300 group-hover:w-20"
                  style={{ backgroundColor: service.color }}
                ></div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              size="lg"
              onClick={scrollToContact}
              className="px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-lg max-w-xs sm:max-w-md mx-auto"
            >
              <span className="text-center">
                <span className="block sm:inline">Contactează-ne pentru</span>
                <span className="block sm:inline sm:ml-1">o ofertă personalizată</span>
              </span>
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}
