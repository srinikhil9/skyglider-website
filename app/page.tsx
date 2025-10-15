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
      <section className="relative bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-20 sm:py-24 lg:py-32 xl:py-40">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center justify-items-center lg:justify-items-start">
            {/* Hero Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 lg:mb-8 leading-tight" style={{ color: '#0A0A0A' }}>
                Move Effortlessly,
                <span className="text-primary block mt-2"> Anywhere You Sit</span>
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl mb-8 lg:mb-10 leading-relaxed max-w-2xl font-medium" style={{ color: '#1A1A1A' }}>
                A simple tool designed to bring effortless movement into your daily routine. 
                Keep your body in motion, no matter where you are.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
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

            {/* Hero Image - Multi-image showcase */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src="/images/Side Angle of SkyGlider on Foot.jpg" 
                    alt="SkyGlider in action"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/Men_s Casual Shoe with SG.jpg" 
                    alt="SkyGlider on casual shoe"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src="/images/SkyGlider in Airport View 1.jpg" 
                    alt="SkyGlider at airport"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 sm:py-24 lg:py-32 bg-white" ref={benefitsRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={benefitsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8" style={{ color: '#0A0A0A' }}>
              Why SkyGlider?
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto font-semibold" style={{ color: '#1A1A1A' }}>
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
                className="bg-white border-2 border-gray-200 rounded-3xl p-10 lg:p-12 hover:shadow-2xl hover:border-primary hover:-translate-y-2 transition-all duration-300"
              >
                <benefit.icon className="h-16 w-16 lg:h-20 lg:w-20 text-primary mb-6 stroke-2" />
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                  {benefit.title}
                </h3>
                <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Price Callout Section */}
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-r from-blue-600 to-cyan-600">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto"
          >
            <div className="order-2 lg:order-1">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/Skyglider with Starbucks Cup (for the price of coffee).jpg" 
                  alt="SkyGlider costs as much as a Starbucks coffee"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="text-white order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 lg:mb-8 text-white">
                All at the price of a coffee
              </h2>
              <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed text-white font-medium">
                But delivering something much greater: an opportunity to keep your body in motion, every single day.
              </p>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Features Overview Section */}
      <section className="py-20 sm:py-24 lg:py-32" style={{ backgroundColor: '#F8FAFB' }} ref={featuresRef}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 sm:mb-20 lg:mb-24"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-6 lg:mb-8" style={{ color: '#0A0A0A' }}>
              How It Works
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl max-w-3xl mx-auto font-semibold" style={{ color: '#1A1A1A' }}>
              Three simple features that make all the difference
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 lg:mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-10 lg:p-12 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <h3 className="text-2xl lg:text-3xl xl:text-4xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                  {feature.title}
                </h3>
                <p className="text-lg lg:text-xl xl:text-2xl leading-relaxed" style={{ color: '#1A1A1A' }}>
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
      <section className="py-20 sm:py-24 lg:py-32 bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-5xl mx-auto"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black mb-8 lg:mb-10 text-white">
              Ready to Start Moving?
            </h2>
            <p className="text-xl sm:text-2xl lg:text-3xl mb-10 lg:mb-14 leading-relaxed text-white font-medium">
              Join the first wave of SkyGlider users and take a step towards a more dynamic lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                href="https://www.tiktok.com/@skyglider" 
                variant="primary" 
                size="large"
                className="bg-white text-primary hover:bg-gray-100 w-full sm:w-auto shadow-2xl"
              >
                Shop Now on TikTok
              </Button>
              <Button 
                href="/product" 
                variant="outline" 
                size="large"
                className="border-2 border-white text-white hover:bg-white hover:text-primary w-full sm:w-auto"
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
