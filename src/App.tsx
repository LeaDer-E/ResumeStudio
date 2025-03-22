import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
import About from './components/About';
import Partners from './components/Partners';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/Whatsapp';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <WhatsAppButton />
      <main>
        <Hero />
        <About />
        <Gallery 
          onImageClick={(image) => {
            setSelectedImage(image);
            setIsModalOpen(true);
          }}
          isModalOpen={isModalOpen}
          selectedImage={selectedImage}
          onClose={() => setIsModalOpen(false)}
        />
        <Partners />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;