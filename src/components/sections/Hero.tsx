"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function Hero() {
  return (
    <section className="py-16 lg:py-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            {/* Location Badge */}
            <motion.div
              className="flex items-center gap-2 text-sm text-neutral-500"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <MapPin size={16} />
              <span>Atlanta, GA — Westside / BeltLine-adjacent</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-6 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              Haircuts &<br />Headshots
            </motion.h1>

            {/* One-liner */}
            <motion.p
              className="mt-6 max-w-lg text-lg text-neutral-600"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              Precision haircuts and professional headshots for creatives and
              professionals who need to look ready for what's next.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <a
                href="https://book.thecut.co/lurchero"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="lg">Book Now</Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="secondary">
                  Learn More
                </Button>
              </a>
            </motion.div>

            {/* QR Code Block */}
            <motion.div
              className="mt-6 flex items-center gap-4"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-[120px] w-[120px] overflow-hidden rounded-lg border border-neutral-200 lg:h-[140px] lg:w-[140px]">
                <Image
                  src="/images/hh/thecut-qr.jpg"
                  alt="Scan to book"
                  fill
                  className="object-cover"
                  sizes="140px"
                />
              </div>
              <div>
                <p className="text-sm font-medium text-neutral-700">Scan to book</p>
                <p className="text-xs text-neutral-500">Opens theCut booking.</p>
              </div>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div
              className="mt-12 grid gap-4 sm:grid-cols-3"
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div>
                <p className="font-semibold text-neutral-900">Two services, one session</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Designed to work together
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Creative-first</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Not corporate, not generic
                </p>
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Culture-driven</p>
                <p className="mt-1 text-sm text-neutral-500">
                  Barbershop meets studio
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl lg:aspect-[3/4]"
          >
            <Image
              src="/images/hh/hero.jpg"
              alt="Haircuts and Headshots"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
