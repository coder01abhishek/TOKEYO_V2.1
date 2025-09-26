"use client"

import { GradientLines } from "./Backgrounds/GradientLines"
import { motion } from "framer-motion";
export default function AtTokyo() {
    return (
        <section>
            <GradientLines className="sm:min-h-screen sm:h-fit h-[420px]">
                <motion.p
                    className="max-w-2xl text-lg leading-relaxed scroll-reveal-text text-center"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: false, amount: 0.2 }} // re-triggers every time
                >
                    We believe AI should feel alive. To connect deeply, it must not only process data, but also carry memory, personality, and presence.

                </motion.p>
            </GradientLines>
        </section>
    )
}   