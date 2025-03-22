import { FileText, Users, Star, Award } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Resume Studio
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            We're dedicated to helping professionals showcase their best selves through expertly crafted resumes that stand out in today's competitive job market.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 animate-float shadow-[0_0_50px_rgba(255,107,255,0.9)">
          {/* Feature 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
            <div className="relative p-6 bg-black rounded-lg border border-white/10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Expert Templates</h3>
              <p className="mt-2 text-gray-400">Professionally designed templates for every industry and career level.</p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
            <div className="relative p-6 bg-black rounded-lg border border-white/10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-500 mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Personalized Service</h3>
              <p className="mt-2 text-gray-400">Tailored support to highlight your unique professional journey.</p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
            <div className="relative p-6 bg-black rounded-lg border border-white/10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500/10 text-blue-500 mb-4">
                <Star size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Premium Quality</h3>
              <p className="mt-2 text-gray-400">High-end designs that make your resume stand out from the crowd.</p>
            </div>
          </div>

          {/* Feature 4 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
            <div className="relative p-6 bg-black rounded-lg border border-white/10">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-500/10 text-purple-500 mb-4">
                <Award size={24} />
              </div>
              <h3 className="text-xl font-semibold text-white">Proven Results</h3>
              <p className="mt-2 text-gray-400">Trusted by professionals who have successful career transitions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}