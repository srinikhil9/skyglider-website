'use client';

import React from 'react';
import { BoltIcon, GlobeAltIcon, ArrowPathIcon } from '@heroicons/react/24/outline';
import Container from './components/Container';
import Button from './components/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Home() {
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
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-white py-16 sm:py-20 lg:py-32 xl:py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center justify-items-center lg:justify-items-start">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-6 lg:mb-8 leading-tight">
                Move Effortlessly,
                <span className="text-primary"> Anywhere You Sit</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-secondary mb-8 lg:mb-10 leading-relaxed max-w-2xl">
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

            {/* Hero Image */}
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

      {/* Benefits Section */}
      <section id="benefits" className="py-16 sm:py-20 lg:py-28 bg-white" ref={benefitsRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              Why SkyGlider?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto">
              Simple, effective, and designed for your dynamic lifestyle
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 xl:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 lg:p-10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <benefit.icon className="h-14 w-14 lg:h-16 lg:w-16 text-primary mb-6" />
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-base lg:text-lg text-secondary leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Price Callout Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-cyan-600 to-blue-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-4xl mx-auto"
          >
            <div className="text-6xl lg:text-8xl mb-6 lg:mb-8">☕</div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-white">
              All at the price of a coffee
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl opacity-95 leading-relaxed text-white">
              But delivering something much greater: an opportunity to keep your body in motion
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Features Overview Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gray-50" ref={featuresRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16 lg:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl text-secondary max-w-3xl mx-auto">
              Four simple steps to get moving
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-12 lg:mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 lg:p-10 shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl lg:text-2xl font-bold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-base lg:text-lg text-secondary leading-relaxed">
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

      {/* Final CTA Section */}
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-8 text-white">
              Ready to Start Moving?
            </h2>
            <p className="text-lg sm:text-xl lg:text-2xl mb-8 lg:mb-12 opacity-95 leading-relaxed text-white">
              Join the first wave of SkyGlider users and take a step towards a more dynamic lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
              <Button 
                href="https://www.tiktok.com/@skyglider" 
                variant="primary" 
                size="large"
                className="bg-white text-blue-600 hover:bg-gray-100 w-full sm:w-auto"
              >
                Shop Now on TikTok
              </Button>
              <Button 
                href="/product" 
                variant="outline" 
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 w-full sm:w-auto"
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
