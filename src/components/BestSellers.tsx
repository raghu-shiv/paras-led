"use client";

import { motion } from "framer-motion";
import bestSellersData from "../data/best-seller.json";
import Image from "next/image";

export function BestSellers() {
  return (
    <section className="relative p-6 sm:p-10 bg-transparent text-center">
      {/* Decorative Elements */}
      <Image
        src="/decor/Asset4.png"
        width={500}
        height={500}
        className="absolute bottom-[25%] sm:bottom-[50%] left-[10%] sm:left-[15%] md:left-[20%] lg:left-[25%] w-xs md:w-xl"
        alt="Decorative Element"
      />

      <div className="relative z-10">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView="visible"
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-[#241F19] text-lg font-bold mb-4"
        >
          Best Sellers
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="text-primary text-4xl sm:text-5xl md:text-5xl mb-8 font-semibold"
        >
          Lights To Illuminate Homes and Hearts
        </motion.h1>

        {/* Products Grid */}
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
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {bestSellersData.map(({ id, title, image, desc }) => (
            <motion.div
              key={id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/25 shadow-lg rounded-lg transition-transform"
            >
              <Image
                src={image}
                alt={title}
                width={500}
                height={500}
                className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md"
              />
              <h3 className="text-secondary text-xl sm:text-2xl font-semibold mt-4">
                {title}
              </h3>
              <p className="text-secondary text-lg sm:text-xl mt-2">{desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
