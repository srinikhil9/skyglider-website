'use client';

import React from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface AccordionProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

export default function Accordion({ question, answer, isOpen, onToggle }: AccordionProps) {
  return (
    <div className="border border-black/10 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-black/5 transition-colors duration-200 text-left"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-black pr-8">{question}</span>
        <ChevronDownIcon
          className={`h-5 w-5 text-black flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 bg-black/5 text-black/80 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}


