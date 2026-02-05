"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const processImages = [
  { src: "/images/hh/process-1.jpg", alt: "The cut" },
  { src: "/images/hh/process-2.jpg", alt: "The style" },
  { src: "/images/hh/process-3.jpg", alt: "The shot" },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Process() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <motion.div
          className="grid grid-cols-3 gap-4 lg:gap-6"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {processImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              className="relative aspect-[3/4] overflow-hidden rounded-xl lg:rounded-2xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 400px"
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
