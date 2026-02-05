"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function Space() {
  return (
    <section className="py-12 lg:py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[21/9] overflow-hidden rounded-2xl"
        >
          <Image
            src="/images/hh/space.jpg"
            alt="The space"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
      </Container>
    </section>
  );
}
