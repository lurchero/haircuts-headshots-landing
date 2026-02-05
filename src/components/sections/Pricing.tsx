"use client";

import { motion } from "framer-motion";
import { Check, Clock, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function Pricing() {
  return (
    <section id="pricing" className="bg-neutral-50 py-20 lg:py-24">
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
            Pricing
          </h2>
          <p className="mt-4 text-lg text-neutral-600">
            One package. Everything included.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          className="mx-auto mt-16 max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="rounded-2xl border-2 border-neutral-900 bg-white p-8">
            <h3 className="text-xl font-semibold text-neutral-900">
              Haircuts & Headshots Combo Package
            </h3>
            <div className="mt-4 flex items-baseline">
              <span className="text-5xl font-bold text-neutral-900">$200</span>
            </div>

            {/* What's Included */}
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 text-neutral-700" />
                <span className="text-neutral-600">Haircut</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 text-neutral-700" />
                <span className="text-neutral-600">
                  Professional headshot session
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 text-neutral-700" />
                <span className="text-neutral-600">Clean backdrop</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 text-neutral-700" />
                <span className="text-neutral-600">Same-day image selection</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="mt-0.5 text-neutral-700" />
                <span className="text-neutral-600">Retouched final images</span>
              </li>
            </ul>

            {/* Session Info */}
            <div className="mt-8 flex flex-col gap-3 border-t border-neutral-100 pt-6 text-sm text-neutral-500">
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>2 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>10:00 AM – 8:00 PM</span>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://book.thecut.co/lurchero"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block"
            >
              <Button className="w-full" size="lg">
                Book Now
              </Button>
            </a>

            {/* Booking Policy */}
            <div className="mt-6 rounded-lg bg-neutral-50 p-4 text-xs text-neutral-600">
              <p className="font-medium text-neutral-700">Booking Policy</p>
              <ul className="mt-2 space-y-1">
                <li>• $50 non-refundable deposit required to book</li>
                <li>• Deposit forfeited if canceled or rescheduled within 72 hours</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
