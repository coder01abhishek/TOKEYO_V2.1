"use client";

import { GradientLines } from "./Backgrounds/GradientLines";
import { motion } from "framer-motion";

export default function AtTokyo() {
  return (
    <section id="about">
      <GradientLines className="min-h-screen h-screen flex items-center justify-center px-6" >
        <motion.p
          className="max-w-2xl text-lg leading-relaxed scroll-reveal-text text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }} 
        >
          At Tokyo, we create AI characters that go beyond simple conversation.
          Our characters can think, remember, and adapt, making every interaction
          feel more natural and human. With powerful customization tools, you
          control how they look, sound, and evolve turning imagination into
          living, interactive companions.
        </motion.p>
      </GradientLines>
    </section>
  );
}
