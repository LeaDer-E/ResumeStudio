import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState(null); // لتتبع حالة النموذج (نجاح أو فشل)
  const [loading, setLoading] = useState(false);

  // @ts-ignore
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      const response = await fetch('https://formspree.io/f/xgvaabee', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        {/*// @ts-ignore*/}
        setStatus('Message sent successfully!');
        e.target.reset(); // إعادة تعيين النموذج بعد الإرسال
      } else {
        {/*// @ts-ignore*/}
        setStatus('There was a problem sending your message.');
        e.target.reset(); // إعادة تعيين النموذج بعد الإرسال
      }
    } catch (error) {
      {/*// @ts-ignore*/}
      setStatus('Message sent successfully!');
      e.target.reset(); // إعادة تعيين النموذج بعد الإرسال
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-us" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Let's discuss how we can help advance your career
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6"></div>
            <div className="relative bg-black rounded-lg border border-white/10 p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="mt-1 block w-full px-4 py-2 bg-white/5 border border-white/10 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-md hover:opacity-90 transition-opacity"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                  <Send className="ml-2 h-4 w-4" />
                </button>
              </form>
              {status && (
                <div className="mt-4 text-center text-lg text-l font-bold bg-gradient-to-r from-blue-500 to-purple-300 bg-clip-text text-transparent">
                  <p>{status}</p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
              <div className="relative p-6 bg-black rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">Email</h3>
                    <p className="mt-1 text-gray-300">
                      <a href="mailto:Resume.Studio@Hotmail.com" className="hover:text-blue-500 transition-colors">
                        Resume.Studio@Hotmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
              <div className="relative p-6 bg-black rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Phone className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">Phone</h3>
                    <p className="mt-1 text-gray-300">
                      <a href="tel:+201283447065" className="hover:text-blue-500 transition-colors">
                        (+20) 128 344 7065
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
              <div className="relative p-6 bg-black rounded-lg border border-white/10">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                    <h3 className="text-l font-bold bg-gradient-to-r from-blue-400 to-purple-100 bg-clip-text text-transparent mb-4">Address</h3>
                    <p className="mt-1 text-gray-300">
                      Alexandria, Egypt
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
