"use client"
import Link from 'next/link';
import { useState } from 'react';
import Modal from './Modal';
import { motion } from 'framer-motion';

export default function Footer() {
    const [showTerms, setShowTerms] = useState(false);
    const [showPrivacy, setShowPrivacy] = useState(false);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring" as const,
                stiffness: 100
            }
        }
    };

    return (
        <motion.footer
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
            className="bg-black text-gray-300 py-12 md:py-19 z-30"
        >
            <div className="border-b border-white/20 pb-7.5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8">

                    <motion.div variants={itemVariants} className="md:col-span-1 flex flex-col md:items-start text-left">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                            <Link href="/" className="text-[34px] font-bold text-white mb-4 block">
                                PROJECT TOKYO
                            </Link>
                        </motion.div>
                        <motion.p 
                            variants={itemVariants} 
                            className="md:w-55 text-base w-full leading-6"
                        >
                            AI Companion Launchpad
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants} 
                        className="md:col-span-2"
                    >
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 text-left">

                            <motion.div variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-white mb-4">Features</h4>
                                <ul className="sm:space-y-4 space-y-3">
                                    {['Home', 'About', 'AI Characters', 'How It Works'].map((item) => (
                                        <motion.li key={item} variants={itemVariants}>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link 
                                                    href={`#${item.toLowerCase().replace(' ', '')}`}
                                                    className="hover:text-white text-[#ffffff] transition-colors duration-200 block"
                                                >
                                                    {item}
                                                </Link>
                                            </motion.div>
                                        </motion.li>
                                    ))}
                                </ul>   
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
                                <ul className="sm:space-y-5 space-y-3">
                                    {['Modules', 'Faq'].map((item) => (
                                        <motion.li key={item} variants={itemVariants}>
                                            <motion.div whileHover={{ x: 5 }}>
                                                <Link 
                                                    href={`#${item.toLowerCase()}`}
                                                    className="hover:text-white text-[#ffffff] transition-colors duration-200 block"
                                                >
                                                    {item}
                                                </Link>
                                            </motion.div>
                                        </motion.li>
                                    ))}
                                    <motion.li variants={itemVariants}>
                                        <motion.button
                                            onClick={() => setShowTerms(true)}
                                            className="hover:text-white transition text-[#ffffff]"
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Terms & Conditions
                                        </motion.button>
                                    </motion.li>
                                    <motion.li variants={itemVariants}>
                                        <motion.button
                                            onClick={() => setShowPrivacy(true)}
                                            className="hover:text-white transition text-[#ffffff]"
                                            whileHover={{ x: 5 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Privacy Policy
                                        </motion.button>
                                    </motion.li>
                                </ul>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            <motion.div 
                variants={itemVariants}
                className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8"
            >
                <p className="text-[24px] font-medium text-white sm:mt-10 mt-5 sm:mb-4 mb-2">Disclaimer</p>
                <p className="sm:text-[20px] text-base font-normal text-[#a0a0a0] leading-5">
                    Project Tokyo is an independent project and is not affiliated with, endorsed by, or officially connected to the city of Tokyo or any of its governing bodies. We chose the name &quot;Tokyo&quot; out of deep respect and love for Japanese culture, innovation, and technological advancement.
                </p>
            </motion.div>

            <Modal
                isOpen={showTerms}
                onClose={() => setShowTerms(false)}
                title="Risk Disclosure & Terms of Use"
            >
                <div className="space-y-4 text-gray-300 mt-5 terms">
                    <strong>Last Updated: July 9, 2025</strong>

                    <p><strong>1. Purpose & Acknowledgment</strong></p>
                    <p>
                        Project Tokyo is an AI Companion Launchpad that enables users to create,
                        customize, and interact with AI driven characters. By accessing or using
                        Project Tokyo, you acknowledge that you are engaging with experimental AI
                        technology. Your use of the platform is voluntary and entirely at your own
                        risk.
                    </p>

                    <p><strong>2. AI Companions Are Not Advisors</strong></p>
                    <p>
                        AI companions, bots, or tools available through Project Tokyo operate
                        without human supervision. They are designed for entertainment, creative
                        expression, and conversational purposes only. They do not provide
                        professional, financial, medical, legal, or mental health advice. Users are
                        responsible for seeking qualified professionals when making real world
                        decisions.
                    </p>

                </div>
            </Modal>

            <Modal
                isOpen={showPrivacy}
                onClose={() => setShowPrivacy(false)}
                title="Privacy Policy"
            >
                <div className="space-y-4 text-gray-300 mt-5 terms">
                    <strong>Last Updated: July 9, 2025</strong>
                    <p>
                        Welcome to Project Tokyo AI Companion Launchpad. Your privacy matters to us. This Privacy Policy explains how we collect, use, and protect your information when you use our website and services at www.projecttokyo.ai.
                    </p>

                    <p><strong>1. Information We Collect</strong></p>
                    <p>We do not collect personal data unless you voluntarily provide it (for example, when submitting a form, joining a waitlist, or contacting us). However, we may collect limited technical information:</p>
                    <ul className="list-disc pl-5">
                        <li className="sm:text-[18px] leading-[22px]">Browser and device information</li>
                        <li className="sm:text-[18px] leading-[22px]">Anonymized IP address (for analytics)</li>
                        <li className="sm:text-[18px] leading-[22px]">Usage statistics (via tools like Vercel Analytics or similar platforms)</li>
                    </ul>

                </div>
            </Modal>
        </motion.footer>
    );
}