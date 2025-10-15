'use client';

import React from 'react';
import { ExclamationTriangleIcon, LightBulbIcon, CheckIcon } from '@heroicons/react/24/outline';
import Container from '../components/Container';
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function HowToUsePage() {
  const [stepsRef, stepsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [tipsRef, tipsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const steps = [
    {
      number: 1,
      title: 'Position the Device',
      description: 'Place SkyGlider under the front part of your shoe or foot. Make sure it sits comfortably beneath the ball of your foot.',
      image: '/images/Men_s Boot with SG.jpg',
    },
    {
      number: 2,
      title: 'Secure the Fit',
      description: 'Adjust the width for your shoe or foot using the built-in screw knob mechanism until snug but comfortable. It should feel secure without being tight.',
      image: '/images/Black SkyGlider View 2.jpg',
    },
    {
      number: 3,
      title: 'Test Stability',
      description: 'Gently rock your foot to ensure a secure fit before full use. The device should stay firmly in place without sliding.',
      image: '/images/Men_s Casual Shoe with SG 2.jpg',
    },
    {
      number: 4,
      title: 'Use It!',
      description: 'Sit comfortably with your feet flat on the ground and SkyGlider under your forefoot. Roll your foot back and forth or laterally in a smooth motion, feeling the ease of movement.',
      image: '/images/Women_s Casual Shoe with SG.jpg',
    },
  ];

  const tips = [
    'Start with gentle movements to get accustomed to the rolling motion',
    'Use on flat, stable surfaces for the best experience',
    'Adjust the fit throughout the day as needed for maximum comfort',
    'Make it part of your daily routine while working, studying, or relaxing',
    'Clean with a damp cloth when needed - maintenance is minimal',
  ];

  const safetyGuidelines = [
    'Use on a flat, non-slip surface',
    'Do not stand or attempt to walk while using SkyGlider',
    'Avoid excessive pressure or force — SkyGlider works best with natural, fluid movement',
    'If you have any severe foot or ankle conditions, consult a professional before use',
  ];

  return (
    <div className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-blue-50 via-white to-cyan-50">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-8" style={{ color: '#0A0A0A' }}>
            Getting Started with SkyGlider
          </h1>
          <p className="text-2xl sm:text-3xl lg:text-4xl max-w-4xl mx-auto leading-relaxed font-semibold" style={{ color: '#1A1A1A' }}>
            Follow these simple steps to start bringing effortless movement into your daily routine. 
            No complicated setup required!
          </p>
        </motion.div>

        {/* Step-by-Step Guide */}
        <section ref={stepsRef} className="mb-24 sm:mb-28 lg:mb-32">
          <div className="space-y-16 lg:space-y-20">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Step Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-black shadow-lg">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl lg:text-4xl font-black mb-4" style={{ color: '#0A0A0A' }}>
                        {step.title}
                      </h3>
                      <p className="text-xl lg:text-2xl leading-relaxed" style={{ color: '#1A1A1A' }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl border-2 border-gray-200">
                    <img 
                      src={step.image} 
                      alt={`${step.title} - Step ${step.number}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section ref={tipsRef} className="mb-24 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tipsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-white rounded-3xl p-10 sm:p-14 lg:p-16 border-2 border-blue-100 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <LightBulbIcon className="h-12 w-12 text-accent stroke-2" />
              <h2 className="text-4xl lg:text-5xl font-black" style={{ color: '#0A0A0A' }}>
                Tips for Best Experience
              </h2>
            </div>
            <ul className="space-y-6">
              {tips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={tipsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <CheckIcon className="h-8 w-8 text-primary flex-shrink-0 mt-1 stroke-2" />
                  <span className="text-xl lg:text-2xl leading-relaxed font-medium" style={{ color: '#1A1A1A' }}>{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Safety Guidelines */}
        <section className="mb-24 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-amber-50 border-4 border-amber-300 rounded-3xl p-10 sm:p-14 lg:p-16 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <ExclamationTriangleIcon className="h-12 w-12 text-amber-600 stroke-2" />
              <h2 className="text-4xl lg:text-5xl font-black" style={{ color: '#0A0A0A' }}>
                Safety Guidelines
              </h2>
            </div>
            <ul className="space-y-6 mb-8">
              {safetyGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-amber-600 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-xl lg:text-2xl leading-relaxed font-medium" style={{ color: '#1A1A1A' }}>{guideline}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg border-t-2 border-amber-300 pt-8 font-medium" style={{ color: '#1A1A1A' }}>
              <strong className="font-black">Important:</strong> SkyGlider is a tool for movement and leg comfort during long periods 
              of sedentariness, not a medical device. Natural, fluid movement works best.
            </p>
          </motion.div>
        </section>

        {/* Video Placeholder */}
        <section className="mb-24 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-10" style={{ color: '#0A0A0A' }}>
              Watch It in Action
            </h2>
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 rounded-3xl flex items-center justify-center border-4 border-gray-400 shadow-xl">
              <div className="text-center">
                <div className="text-7xl mb-6">🎥</div>
                <p className="text-2xl font-bold" style={{ color: '#1A1A1A' }}>Demo Video Coming Soon</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 sm:p-16 lg:p-20 text-center text-white shadow-2xl"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-8 text-white">
            Still Have Questions?
          </h2>
          <p className="text-2xl sm:text-3xl mb-12 text-white font-medium leading-relaxed max-w-3xl mx-auto">
            Check out our FAQ page for answers to common questions
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button 
              href="/faq"
              variant="primary"
              size="large"
              className="bg-white text-primary hover:bg-gray-100 shadow-xl"
            >
              View FAQ
            </Button>
            <Button 
              href="/contact"
              variant="outline"
              size="large"
              className="border-2 border-white text-white hover:bg-white hover:text-primary"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}


