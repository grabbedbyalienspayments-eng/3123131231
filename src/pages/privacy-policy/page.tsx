
import { useEffect } from 'react';
import Header from '../../components/feature/Header';
import Footer from '../../components/feature/Footer';
import CookieConsent from '../../components/feature/CookieConsent';
import SEOHead from '../../components/feature/SEOHead';
import { useCookieConsent } from '../../hooks/useCookieConsent';

export default function PrivacyPolicy() {
  const { showBanner, acceptCookies, rejectCookies, resetConsent } = useCookieConsent();

  useEffect(() => {
    // Ascultă evenimentul pentru redeschiderea bannerului de cookie-uri
    const handleManageCookies = () => {
      resetConsent();
    };

    window.addEventListener('manageCookies', handleManageCookies);
    
    return () => {
      window.removeEventListener('manageCookies', handleManageCookies);
    };
  }, [resetConsent]);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Politica de Confidențialitate - ElectroFix",
    "description": "Politica de confidențialitate și protecția datelor personale pentru serviciile ElectroFix.",
    "url": `${import.meta.env.VITE_SITE_URL || ""}/politica-confidentialitate`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "ElectroFix",
      "url": import.meta.env.VITE_SITE_URL || ""
    },
    "dateModified": "2025-01-01",
    "inLanguage": "ro"
  };

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Politica de Confidențialitate - ElectroFix"
        description="Politica de confidențialitate și protecția datelor personale pentru serviciile ElectroFix. Aflați cum protejăm informațiile dumneavoastră."
        keywords="politica confidențialitate, protecția datelor, GDPR, ElectroFix"
        canonical="/politica-confidentialitate"
        schemaData={schemaData}
      />
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-[#1C1C1C] mb-8">
            Politica de Confidențialitate
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                1. Informații generale
              </h2>
              <p className="text-gray-700 mb-4">
                Această politică de confidențialitate descrie modul în care ElectroFix colectează, 
                utilizează și protejează informațiile personale ale utilizatorilor site-ului nostru web.
              </p>
              <p className="text-gray-700">
                Prin utilizarea site-ului nostru, sunteți de acord cu practicile descrise în această politică.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                2. Informații colectate
              </h2>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                2.1 Informații furnizate direct
              </h3>
              <ul className="list-disc pl-6 text-gray-700 mb-4">
                <li>Nume și prenume</li>
                <li>Adresa de email</li>
                <li>Numărul de telefon</li>
                <li>Adresa pentru intervenții</li>
                <li>Detalii despre serviciile solicitate</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                2.2 Informații colectate automat
              </h3>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Adresa IP</li>
                <li>Tipul de browser și versiunea</li>
                <li>Paginile vizitate pe site</li>
                <li>Timpul petrecut pe site</li>
                <li>Data și ora vizitei</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                3. Utilizarea cookie-urilor
              </h2>
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                3.1 Cookie-uri necesare
              </h3>
              <p className="text-gray-700 mb-4">
                Aceste cookie-uri sunt esențiale pentru funcționarea site-ului și nu pot fi dezactivate. 
                Ele includ preferințele de consimțământ și setările de securitate.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                3.2 Cookie-uri de analiză
              </h3>
              <p className="text-gray-700 mb-4">
                Utilizăm Google Analytics pentru a înțelege cum interactionați cu site-ul nostru. 
                Aceste cookie-uri se activează doar cu consimțământul dumneavoastră explicit.
              </p>
              
              <h3 className="text-xl font-semibold text-[#1C1C1C] mb-3">
                3.3 Gestionarea cookie-urilor
              </h3>
              <p className="text-gray-700">
                Puteți administra preferințele pentru cookie-uri oricând prin bannerul de consimțământ 
                sau prin butonul din footer.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                4. Scopul prelucrării datelor
              </h2>
              <p className="text-gray-700 mb-4">
                Utilizăm informațiile colectate pentru:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Furnizarea serviciilor electrice solicitate</li>
                <li>Comunicarea cu clienții</li>
                <li>Programarea intervențiilor</li>
                <li>Îmbunătățirea serviciilor noastre</li>
                <li>Respectarea obligațiilor legale</li>
                <li>Analiza traficului pe site (cu consimțământ)</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                5. Partajarea informațiilor
              </h2>
              <p className="text-gray-700 mb-4">
                Nu vindem, nu închiriem și nu partajăm informațiile personale cu terțe părți, 
                cu excepția următoarelor situații:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Când este necesar pentru furnizarea serviciilor</li>
                <li>Când este cerut de lege</li>
                <li>Cu consimțământul explicit al utilizatorului</li>
                <li>Pentru protejarea drepturilor și siguranței noastre</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                6. Drepturile dumneavoastră GDPR
              </h2>
              <p className="text-gray-700 mb-4">
                Conform GDPR, aveți următoarele drepturi:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li><strong>Dreptul de acces</strong> - să solicitați o copie a datelor personale</li>
                <li><strong>Dreptul de rectificare</strong> - să corectați datele inexacte</li>
                <li><strong>Dreptul la ștergere</strong> - să solicitați ștergerea datelor</li>
                <li><strong>Dreptul la restricționare</strong> - să limitați prelucrarea</li>
                <li><strong>Dreptul la portabilitate</strong> - să transferați datele</li>
                <li><strong>Dreptul de opoziție</strong> - să vă opuneți prelucrării</li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                7. Securitatea datelor
              </h2>
              <p className="text-gray-700">
                Implementăm măsuri de securitate tehnice și organizatorice pentru a proteja 
                informațiile personale împotriva accesului neautorizat, modificării, divulgării 
                sau distrugerii.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                8. Păstrarea datelor
              </h2>
              <p className="text-gray-700">
                Păstrăm datele personale doar atât timp cât este necesar pentru îndeplinirea 
                scopurilor pentru care au fost colectate sau conform cerințelor legale.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h2 className="text-2xl font-bold text-[#1C1C1C] mb-4">
                9. Contact
              </h2>
              <p className="text-gray-700 mb-4">
                Pentru întrebări despre această politică de confidențialitate și pentru exercitarea 
                drepturilor dumneavoastră, ne puteți contacta:
              </p>
              <div className="space-y-2 text-gray-700">
                <p><strong>Email:</strong> contact@electrofix.ro</p>
                <p><strong>Telefon:</strong> 0723 000 111</p>
                <p><strong>Adresa:</strong> București, Strada Energiei nr. 22</p>
              </div>
              <p className="text-gray-600 text-sm mt-6">
                Ultima actualizare: Ianuarie 2025
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      <CookieConsent
        isVisible={showBanner}
        onAccept={acceptCookies}
        onReject={rejectCookies}
      />
    </div>
  );
}
