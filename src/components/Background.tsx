import { motion } from "framer-motion";

const BackgroundShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 - Large Subtle Orb */}
      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-br from-purple-700/25 via-blue-600/20 to-teal-500/25 rounded-full filter blur-3xl opacity-60"
        initial={{ x: "-25%", y: "-25%", scale: 1 }}
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
        initial={{ x: "-10%", y: "-10%", rotate: 0 }}
        animate={{
          x: ["-10%", "5%", "-15%", "-10%"],
          y: ["-10%", "15%", "-5%", "-10%"],
          rotate: [0, -6, 6, 0],
          scale: [1, 1.05, 1],
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
        initial={{ x: "15%", y: "15%", rotate: 0 }}
        animate={{
          x: ["15%", "-5%", "10%", "15%"],
          y: ["15%", "-10%", "5%", "15%"],
          rotate: [0, 5, -5, 0],
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
    </div>
  );
};

export default BackgroundShapes;
