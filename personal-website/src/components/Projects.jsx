import React, { useState } from 'react';
import AnimatedSection from './AnimatedSection';
import Tilt from 'react-parallax-tilt';
import { ExternalLink, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import techEnergyImg from '../assets/tech_energy.png';
import slackBotImg   from '../assets/ta_bot.png';
import dishDropImg   from '../assets/dish_drop.png';

const projects = [
  {
    title: 'Tech-Energy Statistical Arbitrage',
    description:
      'ML-based long-short strategy on Tech & Energy stocks, built for Apex Fund.',
    link: 'https://github.com/apexfund/long-short-strategy',
    image: techEnergyImg,
    stack: ['Python', 'scikit-learn', 'Yahoo Finance API'],
  },
  {
    title: 'Slack TA Bot',
    description:
      'Slackbot that analyzes technical indicators and provides buy/sell signals.',
    link: 'https://github.com/apexfund/apex_dowbot',
    image: slackBotImg,
    stack: ['Python', 'AWS Lambda', 'Slack API'],
  },
  {
    title: 'Dish Drop',
    description:
      'Connecting restaurants to places in needed using an Uber-like driver system.',
    link: 'https://github.com/s1ddh4rthc/dish-drop',
    image: dishDropImg,
    stack: ['Swift', 'Python', 'Google Cloud Firebase'],
  },
];

export default function Projects() {
  const [selected, setSelected] = useState(null);

  return (
    <AnimatedSection id="projects" className="py-12 relative">
      <h2 className="text-3xl font-bold text-center mb-8">📁 Projects</h2>

      {/* 3-column grid of horizontal bars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((proj, i) => (
          <Tilt
            key={i}
            glareEnable
            glareMaxOpacity={0.05}
            tiltMaxAngleX={5}
            tiltMaxAngleY={5}
            transitionSpeed={250}
            className="group cursor-pointer"
          >
            <div
              onClick={() => setSelected(proj)}
              className="flex h-64 md:h-72 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* left image */}
              <img
                src={proj.image}
                alt={proj.title}
                className="w-1/3 h-full object-cover"
              />

              {/* right content */}
              <div className="p-4 w-2/3 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-indigo-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm">
                    {proj.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1 text-xs">
                  {proj.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center rounded-xl">
                <span className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full">
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Details
                </span>
              </div>
            </div>
          </Tilt>
        ))}
      </div>

      {/* Modal (unchanged) */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-xl w-11/12 md:w-8/12 lg:w-6/12 relative"
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              exit={{ y: 50 }}
              transition={{ duration: 0.3 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  {selected.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  {selected.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={selected.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </AnimatedSection>
  );
}
