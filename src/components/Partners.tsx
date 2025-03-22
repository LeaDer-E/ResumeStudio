import { Building2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: "Dream Net",
      logo: "images/partner/DN.png",
    }
  ];

  return (
    <section id="partners" className="py-24 bg-black/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Partners
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Trusted by leading companies worldwide
          </p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center gap-8">
          {partners.map((partner, index) => (
              <div
                  key={index}
                  className="relative group w-48 md:w-60"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
                <div className="relative p-6 bg-black rounded-lg border border-white/10 w-full">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-full object-contain"
                        //className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                </div>
              </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-2 text-gray-400">
            <Building2 className="h-5 w-5" />
            <span>Join our growing network of corporate partners</span>
          </div>
        </div>
      </div>
    </section>
  );
}