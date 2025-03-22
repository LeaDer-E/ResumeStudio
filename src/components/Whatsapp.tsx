export default function WhatsAppButton() {
    const phoneNumber = "+201283447065"; // رقم الهاتف مع رمز البلد
    const logoSrc = "images/logos/WA.png"; // تأكد من أن مسار الصورة صحيح وأن الصورة بصيغة PNG بخلفية شفافة
  
    const openWhatsApp = () => {
      // فتح رابط WhatsApp في نافذة جديدة
      window.open(`https://wa.me/${phoneNumber}`, "_blank", "noopener,noreferrer");
    };
  
    return (
      <button
        onClick={openWhatsApp}
        className="fixed bottom-6 right-6 z-50 bg-transparent p-2 rounded-full shadow-lg hover:scale-110 transform transition-transform duration-300 focus:outline-none focus:ring-2 focus:ring-purple-700"
        aria-label="Chat on WhatsApp"
      >
        {/* تحسين حجم الصورة وإضافة خاصية object-fit لضمان العرض المناسب */}
        <img
          src={logoSrc}
          alt="WhatsApp Logo"
          className="w-12 h-12 object-contain"
        />
      </button>
    );
  }