'use client';

import React from 'react';
import { BoltIcon, GlobeAltIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import Container from './Container';
import Button from './Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HomePage() {
  const [benefitsRef, benefitsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [featuresRef, featuresInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const benefits = [
    {
      icon: BoltIcon,
      title: 'Simple Setup',
      description: 'No complicated setup, no learning curve. Just attach to your shoe and roll with it.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Travel-Friendly',
      description: 'Compact and portable. Perfect for flights, office desks, or anywhere you sit.',
    },
    {
      icon: ArrowPathIcon,
      title: 'Keep Moving',
      description: 'Combat sedentary lifestyle effortlessly. Keep your legs moving throughout the day.',
    },
  ];

  const features = [
    {
      title: 'Adjustable Fit',
      description: 'Built-in screw knob mechanism adjusts to any shoe size for a perfect, secure fit.',
    },
    {
      title: 'Smooth Rolling',
      description: 'Experience effortless back-and-forth or lateral motion for natural, fluid movement.',
    },
    {
      title: 'Portable Design',
      description: 'Lightweight and compact. Slip it in your bag and take movement anywhere.',
    },
  ];

  return (
    <div>
      <section className="relative bg-gradient-to-br from-sky-50 via-cyan-50 to-white py-20 lg:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 leading-tight tracking-tight">
                Move Effortlessly,
                <span className="text-sky-500 block mt-2"> Anywhere You Sit</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 mb-8 leading-relaxed max-w-2xl">
                A simple tool designed to bring effortless movement into your daily routine.
                Keep your body in motion, no matter where you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  href="https://www.tiktok.com/@skyglider"
                  variant="primary"
                  size="large"
                >
                  Shop on TikTok
                </Button>
                <Button
                  href="#benefits"
                  variant="outline"
                  size="large"
                >
                  Learn More
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/images/Men_s Casual Shoe with SG.jpg"
                  alt="SkyGlider on casual shoe"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      <section id="benefits" className="py-20 lg:py-28 bg-white" ref={benefitsRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              Why SkyGlider?
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              Simple, effective, and designed for your dynamic lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <benefit.icon className="h-14 w-14 text-sky-500 mb-6" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-gradient-to-r from-cyan-500 to-sky-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="text-7xl mb-6">☕</div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              All at the price of a coffee
            </h2>
            <p className="text-xl opacity-95 leading-relaxed text-white">
              But delivering something much greater: an opportunity to keep your body in motion
            </p>
          </motion.div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-slate-50" ref={featuresRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight">
              How It Works
            </h2>
            <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto">
              Four simple steps to get moving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button href="/how-to-use" variant="primary" size="large">
              See Full Guide
            </Button>
        </div>
        </Container>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-br from-sky-600 via-cyan-600 to-sky-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-white tracking-tight">
              Ready to Start Moving?
            </h2>
            <p className="text-xl mb-10 opacity-95 leading-relaxed text-white">
              Join the first wave of SkyGlider users and take a step towards a more dynamic lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                href="https://www.tiktok.com/@skyglider"
                variant="primary"
                size="large"
                className="bg-white text-sky-600 hover:bg-slate-50 w-full sm:w-auto"
              >
                Shop Now on TikTok
              </Button>
              <Button
                href="/product"
                variant="outline"
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-sky-600 w-full sm:w-auto"
              >
                Learn More About Product
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
