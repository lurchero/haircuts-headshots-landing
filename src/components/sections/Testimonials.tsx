"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

const testimonials = [
  {
    quote: "Best cut I've had in Atlanta — and the photos were crazy.",
    image: "/images/hh/testimonial-1.jpg",
  },
  {
    quote: "Perfect for creatives who actually care about how they look on camera.",
    image: "/images/hh/testimonial-2.jpg",
  },
  {
    quote: "Didn't feel rushed. The whole experience felt intentional.",
    image: "/images/hh/testimonial-3.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-24">
      <Container>
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
            What people are saying
          </h2>
        </motion.div>

        {/* Testimonials */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={item}
              transition={{ duration: 0.5 }}
              className="rounded-2xl bg-neutral-50 p-6"
            >
              {/* Avatar Image */}
              <div className="relative h-14 w-14 overflow-hidden rounded-full">
                <Image
                  src={testimonial.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              </div>

              {/* Quote */}
              <p className="mt-4 text-lg text-neutral-700">
                "{testimonial.quote}"
              </p>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
