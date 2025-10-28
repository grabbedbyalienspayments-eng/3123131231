
import Card from '../../../components/base/Card';

export default function AboutSection() {
  return (
    <section id="despre" className="py-20 bg-[#F4F5F7]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Despre <span className="text-[#007BFF]">ElectroFix</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="h-full">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Cu peste <span className="font-bold text-[#007BFF]">10 ani de experiență</span>, ElectroFix oferă servicii profesionale de instalații și reparații electrice, bazate pe seriozitate, transparență și grijă față de detalii.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Lucrăm cu echipamente de calitate, respectăm toate normele de siguranță și intervenim rapid, fie că este vorba de un scurtcircuit, o priză defectă sau o instalație nouă într-un apartament modern.
                </p>
                
                <div className="bg-[#007BFF]/10 rounded-2xl p-6 border-l-4 border-[#007BFF]">
                  <p className="text-xl font-semibold text-[#1C1C1C] italic">
                    "Misiunea noastră este simplă: să aducem lumină și siguranță în fiecare locuință."
                  </p>
                </div>
              </Card>
            </div>
            
            <div className="flex justify-center">
              <Card hover className="max-w-md">
                <div className="text-center">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Professional%20electrician%20portrait%20in%20clean%20workshop%20environment%2C%20wearing%20safety%20equipment%2C%20confident%20and%20trustworthy%20appearance%2C%20modern%20electrical%20tools%20in%20background%2C%20professional%20lighting%2C%20high%20quality%20photography%2C%20clean%20white%20background&width=400&height=500&seq=electrician-portrait&orientation=portrait"
                    alt="Electrician profesionist ElectroFix"
                    className="w-full h-80 object-cover object-top rounded-2xl mb-6"
                  />
                  <h3 className="text-2xl font-bold text-[#1C1C1C] mb-2">Echipa ElectroFix</h3>
                  <p className="text-gray-600">Electricieni autorizați cu experiență</p>
                  
                  <div className="flex justify-center space-x-4 mt-4">
                    <div className="flex items-center text-[#FFD200]">
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                      <i className="ri-star-fill"></i>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
