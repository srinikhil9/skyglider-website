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
      icon: '👟',
    },
    {
      number: 2,
      title: 'Secure the Fit',
      description: 'Adjust the width for your shoe or foot using the built-in screw knob mechanism until snug but comfortable. It should feel secure without being tight.',
      icon: '🔧',
    },
    {
      number: 3,
      title: 'Test Stability',
      description: 'Gently rock your foot to ensure a secure fit before full use. The device should stay firmly in place without sliding.',
      icon: '⚖️',
    },
    {
      number: 4,
      title: 'Use It!',
      description: 'Sit comfortably with your feet flat on the ground and SkyGlider under your forefoot. Roll your foot back and forth or laterally in a smooth motion, feeling the ease of movement.',
      icon: '🎯',
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
    <div className="py-12 bg-white">
      <Container>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black tracking-tighter mb-6">
            Getting Started with SkyGlider
          </h1>
          <p className="text-xl text-black/60 max-w-3xl mx-auto leading-relaxed">
            Follow these simple steps to start bringing effortless movement into your daily routine.
            No complicated setup required!
          </p>
        </motion.div>

        {/* Step-by-Step Guide */}
        <section ref={stepsRef} className="mb-20">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={stepsInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                }`}
              >
                {/* Step Content */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl sm:text-3xl font-black text-black tracking-tight mb-3">
                        {step.title}
                      </h3>
                      <p className="text-black/60 leading-relaxed text-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Visual */}
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="aspect-square bg-white border-2 border-black/10 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-8xl mb-4">{step.icon}</div>
                      <p className="text-black/60 font-medium">Step {step.number} Illustration</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Tips Section */}
        <section ref={tipsRef} className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={tipsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-white border border-black/10 rounded-2xl p-8 sm:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <LightBulbIcon className="h-8 w-8 text-black" />
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                Tips for Best Experience
              </h2>
            </div>
            <ul className="space-y-4">
              {tips.map((tip, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={tipsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <CheckIcon className="h-6 w-6 text-black flex-shrink-0 mt-0.5" />
                  <span className="text-black/60 text-lg leading-relaxed">{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </section>

        {/* Safety Guidelines */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white border-2 border-black/10 rounded-2xl p-8 sm:p-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <ExclamationTriangleIcon className="h-8 w-8 text-black" />
              <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight">
                Safety Guidelines
              </h2>
            </div>
            <ul className="space-y-4 mb-6">
              {safetyGuidelines.map((guideline, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-black rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-black/60 text-lg leading-relaxed">{guideline}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-black/60 italic border-t border-black/10 pt-6">
              <strong>Important:</strong> SkyGlider is a tool for movement and leg comfort during long periods
              of sedentariness, not a medical device. Natural, fluid movement works best.
            </p>
          </motion.div>
        </section>

        {/* Video Placeholder */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-black text-black tracking-tight mb-6">
              Watch It in Action
            </h2>
            <div className="aspect-video bg-white border-2 border-black/10 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎥</div>
                <p className="text-black/60 font-medium text-lg">Demo Video Coming Soon</p>
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
          className="bg-black rounded-2xl p-8 sm:p-12 text-center text-white"
        >
          <h2 className="text-4xl sm:text-5xl font-black tracking-tighter mb-4">
            Still Have Questions?
          </h2>
          <p className="text-xl mb-8 text-white/70">
            Check out our FAQ page for answers to common questions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href="/faq"
              variant="primary"
              size="large"
              className="bg-white text-black hover:bg-gray-100"
            >
              View FAQ
            </Button>
            <Button
              href="/contact"
              variant="outline"
              size="large"
              className="border-white text-white hover:bg-white hover:text-black"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}


