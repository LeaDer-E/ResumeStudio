import { ArrowRight } from 'lucide-react';
import BackgroundShapes from "./Background";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black/90"></div>
      
      {/* Content */} 
      <BackgroundShapes />
      <div className=' inline-flex items-center flex flex-col sm:flex-row gap-4 justify-center'>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="block">Craft Your</span>
            <span className="block mt-2 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Professional Story
            </span>
          </h1>
          
          <p className="mt-6 text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto">
            Experience unparalleled sophistication in resume design. Stand out with professionally crafted resumes that capture your unique value.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#gallery"
              className="justify-center inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
            </a>
            
            <a
              href="#about"
              className="justify-center inline-flex items-center px-8 py-3 border border-white/20 text-base font-medium rounded-md text-white hover:bg-white/10 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <img 
                  src="images/logos/Logo01.png" 
                  alt="Resume Studio Logo" 
                  className="w-auto max-w-md h-90 animate-float shadow-[0_0_100px_rgba(157,107,255,0.6)]"
                />
              </div>
          </div>
      </div>
    </section>
  );
}