
import { useState, useEffect } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onReject: () => void;
  isVisible: boolean;
}

export default function CookieConsent({ onAccept, onReject, isVisible }: CookieConsentProps) {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 p-4">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1 pr-0 md:pr-4">
            <p className="text-sm text-gray-700 leading-relaxed">
              Folosim cookie-uri pentru o experiență mai bună. Poți administra consimțământul. 
              <a 
                href="/politica-confidentialitate" 
                className="text-[#007BFF] hover:text-[#0056b3] underline ml-1"
              >
                Detalii în Politica de Confidențialitate
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={onReject}
              className="px-4 py-2 text-sm border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap cursor-pointer flex-1 sm:flex-none"
            >
              Doar necesare
            </button>
            <button
              onClick={onAccept}
              className="px-4 py-2 text-sm bg-[#007BFF] text-white rounded-lg hover:bg-[#0056b3] transition-colors whitespace-nowrap cursor-pointer flex-1 sm:flex-none"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
