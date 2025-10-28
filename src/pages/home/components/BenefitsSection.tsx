
export default function BenefitsSection() {
  const benefits = [
    {
      icon: 'ri-flashlight-line',
      title: 'Intervenții rapide și la timp',
      description: 'Răspundem prompt la apeluri și respectăm programul stabilit'
    },
    {
      icon: 'ri-tools-fill',
      title: 'Echipamente profesionale și piese de calitate',
      description: 'Folosim doar materiale certificate și unelte de ultimă generație'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Siguranță și conformitate garantată',
      description: 'Toate lucrările respectă normele ANRE și standardele de siguranță'
    },
    {
      icon: 'ri-hand-heart-line',
      title: 'Atitudine serioasă și prețuri corecte',
      description: 'Transparență totală în comunicare și tarife competitive'
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-[#007BFF] to-[#0056b3] text-white relative overflow-hidden">
      {/* Fixed JSX syntax by using a template literal for the className attribute */}
      <div
        className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30`}
      ></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              De ce să alegi <span className="text-[#FFD200]">ElectroFix</span>?
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Experiența, profesionalismul și dedicarea noastră fac diferența în fiecare
              proiect.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="text-center group">
                <div className="w-20 h-20 flex items-center justify-center mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl transition-all duration-300 group-hover:scale-110 group-hover:bg-[#FFD200]/20">
                  <i className={`${benefit.icon} text-4xl text-[#FFD200]`}></i>
                </div>

                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>

                <p className="opacity-90 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-6">
              <p className="text-2xl font-bold text-[#FFD200] mb-2">
                Cu noi, curentul tău e pe mâini bune.
              </p>
              <div className="flex items-center justify-center space-x-2">
                <i className="ri-lightning-line text-[#FFD200]"></i>
                <span className="text-lg opacity-90">
                  Încredere. Siguranță. Profesionalism.
                </span>
                <i className="ri-lightning-line text-[#FFD200]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
