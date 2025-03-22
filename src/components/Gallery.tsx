import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';


interface GalleryProps {
  onImageClick: (image: string) => void;
  isModalOpen: boolean;
  selectedImage: string;
  onClose: () => void;
}

export default function Gallery({ onImageClick, isModalOpen, selectedImage, onClose }: GalleryProps) {
  const images = [
    'images/ATS Bold accounting resume_page_1.webp',
    'images/ATS bold classic resume_page_1.webp',
    'images/ATS classic HR resume_page_1.webp',
    'images/Basic management resume_page_1.webp',
    'images/Basic professional resume_page_1.webp',
    'images/Bold modern resume_page_1.webp',
    'images/Classic UI-UX designer resume_page_1.webp',
    'images/Color block resume_page_1.webp',
    'images/Creative teaching resume_page_1.webp',
    'images/Modern initials resume_page_1.webp',
    'images/Modern multi-page resume_page_1.webp',
    'images/Naval_page_1.webp',
    'images/Resume chronological_page_1.webp',
    'images/Resume for internal company transfer_page_1.webp',
    'images/Resume_page_1.webp',
    'images/Simple UI-UX designer resume_page_1.webp',
    'images/Standard Modern_page_1.webp',
    'images/Standard v2 EN - AR_page_1.webp',
    'images/Stylish teaching cover letter_page_1.webp',
    'images/Woodworking resume_page_1.webp',
    'images/xBold presentation_page_1.webp',
    'images/xClassic style_page_1.webp',
    'images/xContemporary layout_page_1.webp',
    'images/xCreative approach_page_1.webp',
    'images/xDynamic style_page_1.webp',
    'images/xElegant style_page_1.webp',
    'images/xMinimalist layout_page_1.webp',
    'images/xModern design_page_1.webp',
    'images/xPolished design_page_1.webp',
    'images/xProfessional approach_page_1.webp',
    'images/xProfessional layout_page_1.webp',
    'images/xRefined presentation_page_1.webp',
    'images/xSleek design_page_1.webp',
    'images/xStructured layout_page_1.webp',
    'images/xStylish approach_page_1.webp',
    'images/xTimeless design_page_1.webp'
  ];

  // Close modal when pressing "Esc"
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen, onClose]);

  function extractImageName(imagePath: string) {
    return imagePath
      .replace(/^images\//, '') // إزالة المجلد
      .replace(/_page_1\.webp$/, '') // إزالة الامتداد
      .replace(/_/g, ' ') // استبدال "_" بمسافات
      //.replace(/\b\w/g, (char) => char.toUpperCase()); // جعل أول حرف في كل كلمة كبيرًا
  }

  return (
    <section id="gallery" className="py-24 bg-black/95 animate-float shadow-[0_0_400px_rgba(255,107,255,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Gallery
          </h2>
          <p className=" mt-4 text-lg text-gray-300">
            Browse through our collection of professionally designed resumes
          </p>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://forms.gle/UcvdMADLq7Wi22rZA"
            className="animate-float shadow-[0_0_50px_rgba(255,107,255,1.9)] text-bold text-2xl flex flex-col items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity text-center"
          >
            <span className='font-bold'>Fill in Form Now</span>
            <span className='font-bold'>to Order</span>
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => onImageClick(image)}
              whileHover={{ scale: 1.05 }} // Hover effect
            >
              <div className="aspect-w-3 aspect-h-4">
                <img
                  src={image}
                  alt={`Resume example ${index + 1}`}
                  className="object-cover w-full h-full transform transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/20 to-transparent opacity-1 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-300 to-purple-600 bg-clip-text text-transparent font-semibold"> {extractImageName(image)} </h3>
                  {/*<p className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-200 bg-clip-text text-transparent ">Click to view details</p>*/}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal with Animation */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          >
            <motion.div
              className="relative max-w-4xl mx-4"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              onClick={(e) => e.stopPropagation()} // Prevent background click from closing modal
            >
              <button
                onClick={onClose}
                className="absolute -top-12 right-0 text-white hover:text-gray-300"
              >
                <X size={24} />
              </button>
              <img
                src={selectedImage}
                alt="Selected resume"
                className="max-w-[100%] max-h-[80vh] object-contain rounded-lg"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
