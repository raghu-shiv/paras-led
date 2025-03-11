"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import products from "@/data/products.json";
import Image from "next/image";

const ITEMS_PER_PAGE = 9;

export default function Products() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);
  const paginatedProducts = products.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <section className="px-4 sm:px-6 py-10 bg-transparent text-center">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-6xl font-semibold text-primary mb-6"
      >
        Our Products
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg sm:text-xl font-semibold text-secondary max-w-3xl mx-auto mb-6"
      >
        Explore our wide range of premium lighting products, from modern LED
        lamps to smart lighting solutions.
      </motion.p>

      {/* Products Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {paginatedProducts.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-white p-4 sm:p-6 shadow-md rounded-lg"
          >
            <h3 className="text-lg sm:text-xl font-semibold text-primary mb-4">
              {product.title}
            </h3>

            {/* Image Slider */}
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={10}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              className="w-full"
            >
              {product.images.map((image, imgIndex) => (
                <SwiperSlide key={imgIndex}>
                  <Image
                    src={`/${image}`}
                    alt={product.title}
                    width={500}
                    height={500}
                    className="w-full h-[250px] sm:h-[300px] object-cover rounded-lg shadow-md"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center space-x-4">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-primary px-4 py-2 font-semibold">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-primary text-white font-semibold rounded-lg shadow-md disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
