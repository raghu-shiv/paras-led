"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaStar, FaLeaf, FaHeadset } from "react-icons/fa";
import Link from "next/link";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

export default function About() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="relative bg-transparent text-center text-primary"
    >
      <motion.h1
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="text-5xl sm:text-6xl font-bold mb-6"
      >
        About Us
      </motion.h1>

      {/* Company Introduction */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16 text-center md:text-left">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeIn}>
            <h1 className="text-4xl sm:text-5xl font-semibold mb-4">
              Who We Are
            </h1>
            <p className="text-lg sm:text-xl leading-relaxed">
              Founded in{" "}
              <strong>2025, Paras LED Lights Production House</strong> is
              committed to delivering high-quality, energy-efficient LED
              lighting solutions. Our products are designed to meet the diverse
              needs of residential, commercial, and industrial spaces, ensuring
              optimal brightness, longevity, and cost-effectiveness.
            </p>
            <p className="mt-4 text-lg sm:text-xl leading-relaxed">
              With a strong presence in multiple regions, including{" "}
              <strong>
                Souna, Mehnajpur, Azamgarh, Varanasi, Saidpur, Chandwak, and
                Lalganj,
              </strong>{" "}
              we strive to illuminate spaces with innovative and sustainable
              lighting solutions. At Paras LED Lights, we prioritize excellence,
              efficiency, and customer satisfaction, making us a trusted name in
              the LED lighting industry.
            </p>
          </motion.div>
          <motion.div
            variants={fadeIn}
            className="flex justify-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/about/about.jpg"
              alt="Paras LED Lights Team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-full"
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={fadeIn}
        className="bg-white/50 py-12 sm:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">
            Our Mission
          </h1>
          <p className="text-lg sm:text-xl max-w-6xl mx-auto leading-relaxed">
            At Paras LED Lights Production House, our mission is to innovate and
            deliver cutting-edge LED lighting solutions that enhance energy
            efficiency, promote sustainability, and ensure exceptional customer
            satisfaction. We strive to illuminate spaces with advanced
            technology while reducing environmental impact and optimizing
            cost-effectiveness.
          </p>
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeIn}
          className="text-4xl sm:text-5xl font-semibold text-center mb-8"
        >
          Why Choose Us?
        </motion.h1>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center"
        >
          {[
            {
              icon: <FaStar />,
              title: "High-Quality LED Lights",
              description:
                "We use cutting-edge technology to provide long-lasting, energy-efficient lighting solutions.",
            },
            {
              icon: <FaLeaf />,
              title: "Eco-Friendly & Cost-Effective",
              description:
                "Our products reduce electricity consumption and promote sustainability.",
            },
            {
              icon: <FaHeadset />,
              title: "Reliable Customer Support",
              description:
                "We ensure prompt assistance and a seamless experience for our customers.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/50 rounded-lg shadow-lg transition-all"
            >
              <div className="flex justify-center mb-2 text-4xl text-primary">
                {item.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-semibold">
                {item.title}
              </h3>
              <p className="mt-2 text-base sm:text-lg">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact CTA */}
      <motion.div
        variants={fadeIn}
        className="bg-primary py-12 sm:py-16 text-white text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-semibold">
          Let&apos;s Light Up Your Space
        </h1>
        <p className="mt-3 text-base sm:text-lg">
          Get in touch with us for high-quality LED lighting solutions.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block border-2 bg-white/90 text-primary font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-primary hover:text-white/90 hover:border-white/90 hover:border-2"
        >
          Contact Us
        </Link>
      </motion.div>
    </motion.section>
  );
}
