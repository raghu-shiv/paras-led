"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <section className="relative z-10 px-4 sm:px-8 py-10 bg-[#f5f5f5] dark:bg-[#1a1a1ab5] text-center">
      {/* Contact Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-primary dark:text-[#EDEAE3] text-4xl sm:text-5xl font-semibold mb-4"
      >
        Get in Touch
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl font-semibold text-secondary dark:text-gray-200 max-w-3xl mx-auto"
      >
        Have questions or need assistance? Our team is here to help you.
      </motion.p>

      {/* Contact Info & Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-10 flex flex-col md:flex-row items-center justify-center gap-8"
      >
        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          className="w-full md:w-1/2 h-[420px] bg-white/90 p-6 sm:p-8 rounded-2xl shadow-xl backdrop-blur-lg border border-gray-200 dark:border-gray-700 flex flex-col justify-center"
        >
          <Image
            src="/logo/logo.png"
            alt="Paras LED Lights Production House"
            width={250}
            height={250}
            className="opacity-90 rounded-full mx-auto mb-4 shadow-lg"
          />
          <h3 className="text-secondary dark:text-black text-2xl sm:text-3xl font-semibold mb-3">
            Paras LED Lights Production House
          </h3>
          <p className="text-[#555] dark:text-gray-800 text-base sm:text-lg">
            📍 Village Bhujehuan, Souna, Saidpur, Ghazipur, Uttar Pradesh -
            233221
            <br />
            Near Jai Maa Sharda Mandir
          </p>
          <p className="text-[#333] dark:text-gray-800 mt-3 text-base sm:text-lg">
            📞 +91 8090848008
          </p>

          <p className="text-[#333] dark:text-gray-800 text-base sm:text-lg">
            ✉️ mithileshyadav8008@gmail.com
          </p>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-full md:w-1/2 h-[420px] relative"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.4173110250513!2d83.13697530000002!3d25.624271800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991db13a6900403%3A0xdfc1bd749e1d7235!2sBhujehua!5e0!3m2!1sen!2sin!4v1741514712981!5m2!1sen!2sin"
              title="Google Map - Paras LED Lights"
              className="w-full h-[420px] rounded-2xl"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
