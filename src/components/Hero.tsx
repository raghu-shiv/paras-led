"use client"; // Required for Swiper in Next.js App Router

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import sliderImages from "@/data/slider.json";
import Image from "next/image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full">
      {/* Responsive Headings with Animation */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-left text-4xl md:text-6xl lg:text-7xl text-[#7B563B] font-semibold px-4 sm:px-10 md:px-[15%] lg:px-[25%]"
      >
        Illuminating
      </motion.h1>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="text-right text-4xl md:text-6xl lg:text-7xl text-[#7B563B] mb-5 font-semibold px-4 sm:px-10 md:px-[15%] lg:px-[25%]"
      >
        Life Intelligently
      </motion.h1>
      {/* Swiper Component */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        className="w-full"
      >
        {sliderImages.map((image, index) => (
          <SwiperSlide key={index}>
            <Image
              className="min-w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] object-cover"
              src={image}
              alt={`Slider Image ${index}`}
              width={1920}
              height={550}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;
