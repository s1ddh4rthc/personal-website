// src/components/Experience.jsx
import React from 'react';

import NutanixLogo from '../assets/logos/nutanix.png';
import SemanticGuardLogo from '../assets/logos/semantic_guard.png';
import GeneralAtomicsLogo from '../assets/logos/general_atomics.png';
import UMDLogo from '../assets/logos/umd_logo.jpg';
import SticsLogo from '../assets/logos/umd_stics.png';

const experiences = [
  {
    role: 'Member of Technical Staff - 1',
    company: 'Nutanix',
    date: 'Feb 2025 – Present',
    logo: NutanixLogo,
    description:
      'Developing backend services on the NCM Self-Service team, building scalable APIs and improving observability.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Nutanix',
    date: 'May 2024 – Aug 2024',
    logo: NutanixLogo,
    description:
      'Integrated NATS JetStream into IAM infrastructure for critical workflow notifications; deployed NATS on Kubernetes; wrote a Go wrapper for user lifecycle notifications.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Semantic Guard',
    date: 'Dec 2023 – Apr 2024',
    logo: SemanticGuardLogo,
    description:
      'Simulated cyber attacks for DoD cybersecurity using Docker; built CI/CD pipelines with Bash/Python; leveraged the ELK stack to detect security incidents.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'General Atomics - Aeronautical Systems',
    date: 'Jun 2023 – Aug 2023',
    logo: GeneralAtomicsLogo,
    description:
      'Contributed to Flight Critical Software modules for MQ-9 Reaper drones; optimized takeoff/landing algorithms; automated test suites to boost code coverage by 20%.',
  },
  {
    role: 'Research Assistant',
    company: 'University of Maryland',
    date: 'Jan 2023 – May 2024',
    logo: UMDLogo,
    description:
      'Designed RNN-based NLP models for social media sentiment analysis (95% accuracy); correlated weather data & economic damage with R²=0.92; implemented MCMC on 30K+ data points.',
  },
  {
    role: 'Course Facilitator, CMSC389G: SWE Role Prep',
    company: 'University of Maryland',
    date: 'Jan 2022 – May 2024',
    logo: SticsLogo,
    description:
      'Engineered “Testudo Bank” Java Spring app with MVC & Docker; coordinated 120+ students’ PRs; wrote Python scripts to populate MySQL test data.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">💼 Experience</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* center line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-px bg-black" />

        <div className="space-y-4 mt-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative">
              {/* dot */}
              <span className="absolute left-1/2 top-0 -translate-x-1/2
                              w-3 h-3 bg-indigo-600 rounded-full
                              border-2 border-white dark:border-gray-900" />

              {/* translucent card, alternating sides */}
              <div
                className={
                  `mt-4 md:mt-0 w-full md:w-11/23 ` +
                  (idx % 2 === 0 ? 'md:ml-auto' : 'md:mr-auto') +
                  ` relative
                  bg-white/70 dark:bg-gray-800/60
                  backdrop-blur-sm rounded-xl
                  p-6 pt-12
                  shadow-lg
                  transition-transform transform
                  hover:-translate-y-1 hover:shadow-2xl`
                }
              >
                {/* logo */}
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className={`absolute top-4 ${
                    idx % 2 === 0 ? 'left-4' : 'right-4'
                  } w-8 h-8 rounded-md`}
                />

                {/* text */}
                <h3 className="text-xl font-semibold dark:text-white">
                  {exp.role}
                </h3>
                <time className="block text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {exp.date} • {exp.company}
                </time>
                <p className="text-gray-700 dark:text-gray-300">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
