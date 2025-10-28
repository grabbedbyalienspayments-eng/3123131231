
import { useState, useEffect } from 'react';

const CONSENT_KEY = 'electrofix_cookie_consent';

export type ConsentType = 'accepted' | 'rejected' | null;

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentType>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem(CONSENT_KEY) as ConsentType;
    if (savedConsent) {
      setConsent(savedConsent);
      setShowBanner(false);
      
      // Activează Google Analytics dacă consimțământul a fost dat
      if (savedConsent === 'accepted') {
        enableGoogleAnalytics();
      }
    } else {
      setShowBanner(true);
    }
  }, []);

  const acceptCookies = () => {
    setConsent('accepted');
    setShowBanner(false);
    localStorage.setItem(CONSENT_KEY, 'accepted');
    enableGoogleAnalytics();
  };

  const rejectCookies = () => {
    setConsent('rejected');
    setShowBanner(false);
    localStorage.setItem(CONSENT_KEY, 'rejected');
    disableGoogleAnalytics();
  };

  const resetConsent = () => {
    localStorage.removeItem(CONSENT_KEY);
    setConsent(null);
    setShowBanner(true);
    disableGoogleAnalytics();
  };

  const enableGoogleAnalytics = () => {
    // Verifică dacă Google Analytics nu este deja încărcat
    if (!window.gtag) {
      // Adaugă scriptul Google Analytics
      const script1 = document.createElement('script');
      script1.async = true;
      script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'GA_MEASUREMENT_ID');
      `;
      document.head.appendChild(script2);
    }
  };

  const disableGoogleAnalytics = () => {
    // Dezactivează Google Analytics
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied'
      });
    }
  };

  return {
    consent,
    showBanner,
    acceptCookies,
    rejectCookies,
    resetConsent
  };
}

// Extinde tipurile pentru window
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}
