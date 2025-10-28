
import { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    urgency: '',
    description: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://readdy.ai/api/form/d3ulpsqb8acecn2ov6rg', {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          phone: '',
          email: '',
          address: '',
          service: '',
          urgency: '',
          description: ''
        });
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-[#1C1C1C]">Solicită o intervenție</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              <i className="ri-close-line"></i>
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <i className="ri-check-circle-line mr-2"></i>
              Cererea ta a fost trimisă cu succes! Te vom contacta în cel mai scurt timp.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
              <i className="ri-error-warning-line mr-2"></i>
              A apărut o eroare. Te rugăm să încerci din nou sau să ne suni direct.
            </div>
          )}

          <form onSubmit={handleSubmit} data-readdy-form id="contact-intervention">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Nume complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm"
                  placeholder="Numele tău complet"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Telefon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm"
                  placeholder="0723 000 111"
                />
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm"
                placeholder="email@exemplu.ro"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Adresa intervenției *
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm"
                placeholder="Strada, numărul, sectorul/orașul"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="service" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Tipul serviciului *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Selectează serviciul</option>
                  <option value="reparatii">Reparații și intervenții rapide</option>
                  <option value="instalatii">Instalații electrice complete</option>
                  <option value="modernizari">Modernizări & tablouri electrice</option>
                  <option value="consultanta">Consultanță și verificări</option>
                  <option value="altele">Altele</option>
                </select>
              </div>
              <div>
                <label htmlFor="urgency" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                  Urgența *
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm pr-8"
                >
                  <option value="">Selectează urgența</option>
                  <option value="urgenta">Urgență (în 2-4 ore)</option>
                  <option value="astazi">Astăzi</option>
                  <option value="maine">Mâine</option>
                  <option value="saptamana">În această săptămână</option>
                  <option value="flexibil">Sunt flexibil</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="description" className="block text-sm font-medium text-[#1C1C1C] mb-2">
                Descrierea problemei
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                rows={4}
                maxLength={500}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#007BFF] focus:border-transparent text-sm resize-none"
                placeholder="Descrie pe scurt problema sau serviciul de care ai nevoie..."
              />
              <div className="text-right text-xs text-gray-500 mt-1">
                {formData.description.length}/500 caractere
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onClose}
                className="whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg border-2 border-gray-300 text-gray-700 hover:border-gray-400 px-6 py-3 flex-1"
              >
                Anulează
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="whitespace-nowrap cursor-pointer font-medium rounded-2xl transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg bg-[#007BFF] text-white hover:bg-blue-600 shadow-md px-6 py-3 flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <i className="ri-loader-4-line animate-spin mr-2"></i>
                    Se trimite...
                  </>
                ) : (
                  <>
                    <i className="ri-send-plane-fill mr-2"></i>
                    Trimite cererea
                  </>
                )}
              </button>
            </div>
          </form>

          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="text-center text-sm text-gray-600">
              <p className="mb-2">Sau contactează-ne direct:</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:0723000111" className="flex items-center justify-center text-[#007BFF] hover:text-blue-600">
                  <i className="ri-phone-fill mr-2"></i>
                  0723 000 111
                </a>
                <a href="https://wa.me/40723000111" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center text-[#007BFF] hover:text-blue-600">
                  <i className="ri-whatsapp-line mr-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
