import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");

  const links = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // إذا وصلت إلى أسفل الصفحة (بحد أقصى 100px من الأسفل)
      if (scrollPosition + windowHeight >= documentHeight - 100) {
        setActiveSection("#contact");
        return;
      }

      // التحقق من الأقسام الأخرى
      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          {/*// @ts-ignore*/}
          const sectionTop = section.offsetTop;
          {/*// @ts-ignore*/}
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            setActiveSection(link.href);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [links]);

  return (
    <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-lg border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              Resume Studio
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative px-3 py-2 text-lg font-medium transition-all duration-300
                    ${
                      activeSection === link.href
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold before:absolute before:bottom-0 before:left-1/2 before:w-2/3 before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-500 before:rounded-full before:transition-all before:duration-300 before:-translate-x-1/2"
                        : "text-gray-300 hover:text-white hover:scale-105"
                    }`}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/90 backdrop-blur-lg shadow-lg">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveSection(link.href);
                  setIsMenuOpen(false);
                }}
                className={`block px-3 py-2 text-lg font-medium transition-all duration-300
                  ${
                    activeSection === link.href
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 font-extrabold before:absolute before:bottom-0 before:left-1/2 before:w-2/3 before:h-1 before:bg-gradient-to-r from-blue-400 to-purple-500 before:rounded-full before:transition-all before:duration-300 before:-translate-x-1/2"
                      : "text-gray-300 hover:text-white hover:scale-105"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}