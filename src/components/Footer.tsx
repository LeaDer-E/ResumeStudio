import { useState, useEffect } from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { FaThreads, FaTiktok, FaWhatsapp } from 'react-icons/fa6';

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    // @ts-ignore
    const handleClickOutside = (event) => {
      if (!event.target.closest('.modal-content')) {
        setModalContent(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [modalContent]);

  return (
    <footer id="contact" className="bg-black border-t border-white/10 animate-float shadow-[0_0_20px_rgba(255,107,255,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-5xl">
          {/* Company Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">
              Resume Studio
            </h3>
            <p className="text-gray-400 mb-4">
              Creating professional resumes with distinctive designs.
            </p>
            <h3 className="ext-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">
              Follow Us.
            </h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/ResumeStudioo" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook size={24} />
              </a>
              <a href="https://www.instagram.com/resume.studioo" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://www.threads.net/@resume.studioo" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaThreads size={24} />
              </a>
              <a href="https://www.tiktok.com/@resume.studioo" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaTiktok size={24} />
              </a>
              <a href="https://wa.me/+201283447065" className="text-gray-400 hover:text-blue-500 transition-colors">
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-400 hover:text-blue-500 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-blue-500 transition-colors">About</a>
              </li>
              <li>
                <a href="#gallery" className="text-gray-400 hover:text-blue-500 transition-colors">Gallery</a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-400 hover:text-blue-500 transition-colors">Testimonials</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <Mail size={16} className="h-6 w-6 text-blue-500"/>
                <a href="mailto:Resume.Studio@Hotmail.com" className="hover:text-blue-500 transition-colors ml-2">
                  Resume.Studio@Hotmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <Phone size={16} className="h-6 w-6 text-blue-500"/>
                <a href="tel:+201283447065" className="hover:text-blue-500 transition-colors ml-2">
                  (+20) 128 344 7065
                </a>
              </li>
              <li className="flex items-center text-gray-400">
                <MapPin size={16} className="h-6 w-6 text-blue-500"/>
                <a href="map:https://www.google.com/maps/place/Alexandria,+Alexandria+Governorate/@31.2241109,29.9548859,12z/data=!3m1!4b1!4m6!3m5!1s0x14f5c49126710fd3:0xb4e0cda629ee6bb9!8m2!3d31.2000924!4d29.9187387!16zL20vMDEzZzM?entry=ttu&g_ep=EgoyMDI1MDMxOS4xIKXMDSoASAFQAw%3D%3D" className="hover:text-blue-500 transition-colors ml-2">
                   Alexandria, Egypt
                </a>
              </li>
            </ul>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <img src="images/logos/Logo02.png" alt="Resume Studio Logo" className="h-40 w-auto object-contain border-white/10 border" />
          </div>
        </div>

        {/* Bottom Section - Full Width, Aligned as per Screenshot */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 mt-8 pt-8 w-full">
          <p className="text-gray-400 text-sm">© 2025 Resume Studio. All rights reserved.</p>
          <a href="https://wa.me/+201283447065"><p className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent my-2 sm:my-0">
            Made with 💙 by Owner
          </p>
          </a>
          <div className="flex space-x-6">
            {/*// @ts-ignore*/}
            <button onClick={() => setModalContent('privacy')} className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </button>
            {/*// @ts-ignore*/}
            <button onClick={() => setModalContent('terms')} className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </button>
          </div>
        </div>
      </div>

      {modalContent && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center p-4">
          <div className="modal-content bg-gray-900 text-white p-8 rounded-2xl shadow-2xl max-w-2xl w-full relative animate-fade-in transition-transform transform scale-95 hover:scale-100 duration-300">
            <button 
              onClick={() => setModalContent(null)} 
              className="absolute top-4 right-4 text-lg font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent transition-all duration-300 hover:from-blue-00 hover:to-purple-400">
              ✖
            </button>

            {modalContent === 'privacy' ? (
              <>
                <h2 className="text-3xl font-bold border-b border-white/10 pb-3 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block bg-clip-text text-transparent">Privacy Policy</h2>
                <p className="text-gray-400 mt-3">Last Updated: March 21, 2025</p>
                <div className="text-gray-300 mt-5 leading-relaxed space-y-4">
                  <p>We respect your privacy and do not collect, store, or share data beyond resume creation.</p>
                  <p><strong>Data Usage:</strong> We only use the provided details to create your resume. No tracking or third-party sharing.</p>
                  <p><strong>Retention & Deletion:</strong> Data is kept for three months for edits, then permanently deleted unless requested otherwise.</p>
                  <p><strong>Security:</strong> Your information is confidential and used solely for resume purposes.</p>
                  <p><strong>Contact:</strong> Reach us at <span className="text-blue-400">Resume.Studio@Hotmail.com</span>.</p>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-3xl font-bold border-b border-white/10 pb-3 text-gradient bg-gradient-to-r from-blue-500 to-purple-600 inline-block bg-clip-text text-transparent">Terms of Service</h2>
                <p className="text-gray-400 mt-3">Last Updated: March 21, 2025</p>
                <div className="text-gray-300 mt-5 leading-relaxed space-y-4">
                  <p><strong>1. Agreement:</strong> By using Resume Studio, you accept these terms.</p>
                  <p><strong>2. Services:</strong> We create resumes with 24-hour delivery and free modifications for 3 months.</p>
                  <p><strong>3. Payment:</strong> Full payment is required upfront; no refunds, but free edits are available.</p>
                  <p><strong>4. Privacy:</strong> We do not track or store data beyond resume creation; data is deleted after 3 months.</p>
                  <p><strong>5. Contact:</strong> Reach us at <span className="text-blue-400">Resume.Studio@Hotmail.com</span>.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
        
    </footer>
  );
}