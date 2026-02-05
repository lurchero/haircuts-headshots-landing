"use client";

import { motion } from "framer-motion";
import { Scissors, Camera, Clock, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Services() {
  return (
    <section id="services" className="bg-neutral-50 py-20 lg:py-24">
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
            The Combo Package
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            Haircut and headshot — designed to work together.
          </p>
        </motion.div>

        {/* Service Card */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8 lg:p-12">
            {/* Icons */}
            <div className="flex gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                <Scissors size={24} className="text-neutral-700" />
              </div>
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-neutral-100">
                <Camera size={24} className="text-neutral-700" />
              </div>
            </div>

            <h3 className="mt-6 text-2xl font-bold text-neutral-900">
              Haircuts & Headshots Combo Package
            </h3>

            <p className="mt-4 text-lg text-neutral-600">
              The full experience — precision haircut followed by a professional
              headshot session. Walk out looking and feeling ready for what's next.
            </p>

            {/* What's Included */}
            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="font-semibold text-neutral-900">The Cut</h4>
                <ul className="mt-3 space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Signature haircut
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Styled and finished
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-900">The Shot</h4>
                <ul className="mt-3 space-y-2 text-neutral-600">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Professional headshot session
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Clean backdrop
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Same-day image selection
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-neutral-500" />
                    Retouched final images
                  </li>
                </ul>
              </div>
            </div>

            {/* Price & Duration */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-neutral-100 pt-8">
              <div>
                <p className="text-3xl font-bold text-neutral-900">$200</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-500">
                <Clock size={18} />
                <span>2 hours</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://book.thecut.co/lurchero"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block"
            >
              <Button className="w-full sm:w-auto" size="lg">
                Book Now
              </Button>
            </a>

            {/* Booking Policy */}
            <p className="mt-4 text-sm text-neutral-500">
              $50 non-refundable deposit required. Forfeited if canceled or
              rescheduled within 72 hours.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
