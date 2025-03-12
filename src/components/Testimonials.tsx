"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import testimonials from "@/data/testimonials.json";
import Image from "next/image";

export function Testimonials() {
  return (
    <section className="p-6 sm:p-10 bg-transparent text-center overflow-hidden">
      {/* Section Heading */}
      <h2 className="text-[#241F19] text-lg font-bold mb-4">Testimonials</h2>
      <h1 className="font-semibold text-4xl sm:text-5xl text-primary mb-8">
        What Our Clients Say About Us
      </h1>

      {/* Horizontal Scroll Wrapper */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 15, // Adjust speed of scrolling
            repeat: Infinity,
          }}
        >
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="min-w-[300px] sm:min-w-[350px] p-6 bg-white shadow-lg rounded-xl"
            >
              {/* User Image */}
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                width={100}
                height={100}
                className="w-16 h-16 mx-auto mb-4 rounded-full"
              />
              {/* User Name & Location */}
              <h3 className="text-xl font-semibold text-primary">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-700 font-bold">
                {testimonial.location}
              </p>
              {/* Feedback */}
              <p className="mt-3 text-lg sm:text-xl text-secondary leading-relaxed font-semibold">
                &quot;{testimonial.feedback}&quot;
              </p>
              {/* Star Rating */}
              <div className="flex justify-center mt-4 text-[#FFC107]">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
