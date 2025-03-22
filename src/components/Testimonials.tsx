import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Adham Hisham",
      role: "Senior Chef De Parte",
      image:
        "https://scontent.faly2-2.fna.fbcdn.net/v/t1.30497-1/453178253_471506465671661_2781666950760530985_n.png?stp=dst-png_s480x480&_nc_cat=1&ccb=1-7&_nc_sid=136b72&_nc_ohc=1Lqf5wcWzhIQ7kNvgFVWW5z&_nc_oc=Adnbuaflb8Mn3bsZTTuLKZHBWSIQNED7-kqS02mKpmJHoijPtl3XPyki8pHF-a8V3j0&_nc_zt=24&_nc_ht=scontent.faly2-2.fna&_nc_gid=mN16k8OEXgVUMtEphXB6IQ&oh=00_AYFUSUixtm1F8xVjbAW7L_5vABG6LjRONX9QhLi6oA_R2Q&oe=6805973A",
      content:
        "ناس غيرت شكل تقديمي المهني بشكل كامل. الاهتمام بالتفاصيل والتصميم البسيط ساعدوني أكون ضمن المرشحين في الشركة الكبيرة اللي كنت بحلم أشتغل فيها.",
      medialink: "",
      rating: 5,
    },
    {
      name: "Mustafa Eslam",
      role: "Automation Tester",
      image:
        "https://scontent.faly2-1.fna.fbcdn.net/v/t39.30808-1/391576858_3490039611245824_5888819040637287242_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_ohc=TTUir2mblakQ7kNvgFFceNK&_nc_oc=Adlv1j8SAdyH6eoJ8AUFRJPGjwy7kmWkI5KdNIYO9W66t4AmTssVhvJ502lnypal_ME&_nc_zt=24&_nc_ht=scontent.faly2-1.fna&_nc_gid=4H1wbh7Grnb76PCVWKOCdg&oh=00_AYE-7iNkOu8bXUjkn1TGPBado6iktGt8NjXZ61AG0CgN2A&oe=67E40FA8",
      content:
        "حقيقي عندهم خبرة كبيرة في صناعة السير الذاتية. ساعدوني أظهر إنجازاتي بشكل ملفت وأثبت تميزني في المجال ، شكراً جداً ليكم وشكرا لتحملكم وصبركم",
      medialink: "https://www.facebook.com/Vhattoush",
      rating: 5,
    },
    {
      name: "Eman Abo ManDour",
      role: "Financial Analyst",
      image:
        "https://scontent.faly2-2.fna.fbcdn.net/v/t39.30808-1/482224699_627716109983547_205100304433336797_n.jpg?stp=dst-jpg_s480x480_tt6&_nc_cat=104&ccb=1-7&_nc_sid=1d2534&_nc_ohc=7ehd3-PMZVMQ7kNvgHyX9RL&_nc_oc=AdkmqmmCsiq1Je38RhwzS0zz7pe2GqfAGtvjN4hJch1_iFQ_SrQDQKzs6lQOAhFvV2c&_nc_zt=24&_nc_ht=scontent.faly2-2.fna&_nc_gid=LLcyy4BdGqn9IKbiO7_Gpw&oh=00_AYFBlVyNbV46hLim7GHrVqo4ZUYmOZZraDUU44yeUhNA7Q&oe=67E402FD",
      content:
        "راجعولي السيرة الذاتيه الخاصة بي مجاناً ، ولما طلبت إني أعملوا أدوني خصم مميز وكويس وعملولي سي في شيك جداً وراقي والحمد لله عندي إنترفيو قريب.",
      medialink: "https://www.facebook.com/profile.php?id=100082354907589",
      rating: 5,
    },
    {
      name: "Åhm Ěđ",
      role: "Senior Sales Representative",
      image:
        "https://scontent.faly2-1.fna.fbcdn.net/v/t39.30808-1/332098376_6070827632956029_4875486901949792884_n.jpg?stp=dst-jpg_s100x100_tt6&_nc_cat=102&ccb=1-7&_nc_sid=e99d92&_nc_ohc=FuXPo9EM8koQ7kNvgGZC7Un&_nc_oc=AdnW9pRhNoutFCQuGSWjGmmo_MMH6_GicwcgAQw8KczR72w5tufZzKuRFUJmtwAlEw0&_nc_zt=24&_nc_ht=scontent.faly2-1.fna&_nc_gid=r0Xc0sNP1IK66B3oHNf0Rg&oh=00_AYF72l0qqZRBZ78MzEavf-SKcJJjUcEAKQgHy8FKBCJWOw&oe=67E4C665",
      content:
        "الحمد لله إن ربنا رزقني بيكم وإن شاء الله ربنا يرزقكم ويجعلكم تكونوا سبب في رزق حد شكراً علي الجمال اللى بتقدموة لينا كل الشكر والإحترام.",
      medialink:
        "https://www.facebook.com/profile.php?id=100001856032652&rdid=zNsJXIZ3orGliGv5&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18aQbYnXgT%2F",
      rating: 5,
    }
  ];

  // عدد العناصر التي تظهر في كل مرة
  const itemsToShow = 3;

  // الحالة لتحديد الفهرس الحالي
  const [currentIndex, setCurrentIndex] = useState(0);

  // تحديد العناصر المرئية حاليًا حسب currentIndex
  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  // حساب عدد الصفحات المتاحة (كم صفحة من 3 عناصر كل مرة)
  const totalPages = testimonials.length - itemsToShow + 1;

  // كائن الحركة الخاص بالانتقال بين الشرائح
  const containerVariants = {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
  };

  return (
    <>
      {/* خلفية كاملة الصفحة */}
      <div className="fixed inset-0 z-[-1] pointer-events-none">
        <BackgroundShapes />
      </div>

      <section id="testimonials" className="py-24 bg-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              What Our Clients Say
            </h2>
            <p className="mt-4 text-lg text-gray-300">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          {/* عرض 3 شهادات في كل مرة مع حركة */}
          <div className="mt-16 relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex} // لإعادة تشغيل الحركة عند تغيير الفهرس
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                dir="rtl"
              >
                {visibleTestimonials.map((testimonial, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg -rotate-6 group-hover:rotate-0 transition-transform"></div>
                    <div className="relative p-6 bg-black rounded-lg border border-white/10">
                      <div className="flex items-center mb-4">
                        <a
                          href={testimonial.medialink}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-12 h-12 rounded-full object-cover ml-4"
                          />
                        </a>
                        <div className="ml-4">
                          <a
                            href={testimonial.medialink}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <h3 className="text-lg font-semibold text-white">
                              {testimonial.name}
                            </h3>
                          </a>
                          <p className="text-sm text-gray-400">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className="text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-300">{testimonial.content}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>

            {/* النِّقاط (Dots) للتنقل بين الصفحات مع تأثير حركة */}
            <div className="flex justify-center mt-8 gap-3 flex-row-reverse">
              {Array.from({ length: totalPages }).map((_, pageIndex) => {
                const isActive = pageIndex === currentIndex;
                return (
                  <motion.button
                    key={pageIndex}
                    onClick={() => setCurrentIndex(pageIndex)}
                    // تأثيرات الحركة للنقطة
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: isActive ? 1.3 : 1,
                      backgroundColor: isActive ? "#A855F7" : "#9CA3AF",
                    }}
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative flex items-center justify-center rounded-full"
                    style={{
                      width: "12px",
                      height: "12px",
                    }}
                  >
                    {/* الحلقة الخارجية حين تكون نشطة */}
                    {isActive && (
                      <motion.span
                        layoutId="activeDot"
                        className="absolute rounded-full"
                        style={{
                          width: "30px",
                          height: "30px",
                          backgroundColor: "#A855F7",
                          opacity: 0.15,
                        }}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// نفس الـ BackgroundShapes السابق، دون أي تعديل سوى ما يلزم لظهوره بكامل الصفحة
function BackgroundShapes() {
  return (
    <>
      {/* Shape 1 - Large Subtle Orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-br from-purple-700/25 via-blue-600/20 to-teal-500/25 rounded-full filter blur-3xl opacity-60"
        initial={{ x: "-25%", y: "-25%" }}
        animate={{
          x: ["-25%", "15%", "-10%", "-25%"],
          y: ["-25%", "10%", "-15%", "-25%"],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.4, 0.7, 1],
        }}
      />
      {/* Shape 2 - Central Luxurious Glow */}
      <motion.div
        className="absolute w-[450px] h-[450px] bg-gradient-to-tr from-indigo-700/30 via-pink-600/25 to-purple-700/30 rounded-full filter blur-2xl opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        initial={{ scale: 0.85, rotate: 0 }}
        animate={{
          scale: [0.85, 1.1, 0.9, 1],
          rotate: [0, 12, -12, 0],
          opacity: [0.5, 0.7, 0.5],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Shape 3 - Bottom Right Accent */}
      <motion.div
        className="absolute w-[300px] h-[300px] bg-gradient-to-bl from-cyan-600/30 to-emerald-500/25 rounded-full filter blur-3xl opacity-55 bottom-0 right-0"
        initial={{ x: "25%", y: "25%", rotate: 0 }}
        animate={{
          x: ["25%", "-15%", "10%", "25%"],
          y: ["25%", "5%", "-10%", "25%"],
          rotate: [0, 8, -8, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Shape 4 - Floating Particle */}
      <motion.div
        className="absolute w-[200px] h-[200px] bg-gradient-to-r from-pink-500/20 to-purple-600/20 rounded-full filter blur-xl opacity-40 top-1/4 right-1/3"
        initial={{ y: "-15%" }}
        animate={{
          y: ["-15%", "10%", "-5%", "-15%"],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Shape 5 - Top Left Subtle Glow */}
      <motion.div
        className="absolute w-[250px] h-[250px] bg-gradient-to-tl from-blue-500/25 to-indigo-600/20 rounded-full filter blur-2xl opacity-45 top-10 left-10"
        initial={{ x: "-10%", y: "-10%" }}
        animate={{
          x: ["-10%", "5%", "-15%", "-10%"],
          y: ["-10%", "15%", "-5%", "-10%"],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Shape 6 - Mid-Right Elegant Drift */}
      <motion.div
        className="absolute w-[280px] h-[280px] bg-gradient-to-br from-teal-500/20 via-cyan-600/25 to-blue-600/20 rounded-full filter blur-3xl opacity-50 top-2/3 right-1/4"
        initial={{ x: "15%", y: "15%" }}
        animate={{
          x: ["15%", "-5%", "10%", "15%"],
          y: ["15%", "-10%", "5%", "15%"],
          opacity: [0.5, 0.65, 0.5],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Shape 7 - Small Floating Accent */}
      <motion.div
        className="absolute w-[180px] h-[180px] bg-gradient-to-tr from-purple-500/15 to-pink-500/15 rounded-full filter blur-xl opacity-35 bottom-1/4 left-1/4"
        initial={{ y: "10%" }}
        animate={{
          y: ["10%", "-5%", "15%", "10%"],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
}
