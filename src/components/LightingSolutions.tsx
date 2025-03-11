"use client";

import { motion } from "framer-motion";
import lightingSolutionsData from "@/data/lighting-solutions.json";
import Image from "next/image";

export function LightingSolutions() {
  return (
    <section className="relative p-6 sm:p-10 bg-transparent text-center">
      <Image
        src="/decor/Asset5.png"
        width={500}
        height={500}
        className="absolute bottom-[40%] right-[10%] sm:right-[15%] md:right-[20%] lg:right-[25%] w-2xl rotate-45"
        alt="Decorative Element"
      />
      <div className="relative z-10 max-w-8xl mx-auto">
        {/* Heading Animations */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-[#241F19] text-lg font-bold mb-4"
        >
          Light your world up
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl text-[#7B563B] mb-8 font-semibold"
        >
          Perfect Lighting Solutions
        </motion.h1>

        {/* Lighting Solutions List */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="flex flex-col gap-12"
        >
          {lightingSolutionsData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`md:px-60 flex flex-col md:flex-row items-center gap-6 sm:gap-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image Animation */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`w-full md:w-1/2 flex ${
                  index % 2 === 0 ? "justify-end" : "justify-start"
                } `}
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg shadow-md"
                />
              </motion.div>

              {/* Text Content Animation */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                className="w-full md:w-1/2 text-center md:text-left px-4 sm:px-6"
              >
                <h3 className="text-secondary text-4xl sm:text-3xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-secondary mt-2 leading-relaxed text-2xl sm:text-lg">
                  {item.desc}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
