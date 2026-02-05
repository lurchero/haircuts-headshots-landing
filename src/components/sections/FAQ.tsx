"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does it take?",
    answer: "Sessions are 2 hours.",
  },
  {
    question: "What should I bring or wear?",
    answer:
      "Wear what represents you. Solid colors photograph best. Bring options if unsure.",
  },
  {
    question: "Do you do walk-ins?",
    answer:
      "Appointments are strongly recommended. Limited walk-ins when available.",
  },
  {
    question: "Where do I park?",
    answer: "Street parking available nearby. Details sent after booking.",
  },
  {
    question: "Can I reschedule?",
    answer:
      "Yes — with at least 72 hours' notice. Rescheduling within 72 hours forfeits your deposit.",
  },
];

function FAQItemComponent({
  faq,
  isOpen,
  onClick,
}: {
  faq: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-neutral-200">
      <button
        className="flex w-full items-center justify-between py-5 text-left"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="font-medium text-neutral-900">{faq.question}</span>
        <ChevronDown
          size={20}
          className={cn(
            "text-neutral-500 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-neutral-600">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 lg:py-24">
      <Container>
        <div className="mx-auto max-w-2xl">
          {/* Section Header */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">
              FAQ
            </h2>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {faqs.map((faq, index) => (
              <FAQItemComponent
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              />
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
