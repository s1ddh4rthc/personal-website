import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

import NutanixLogo        from '../assets/logos/nutanix.png';
import SemanticGuardLogo  from '../assets/logos/semantic_guard.png';
import GeneralAtomicsLogo from '../assets/logos/general_atomics.png';
import UMDLogo            from '../assets/logos/umd_logo.jpg';
import SticsLogo          from '../assets/logos/umd_stics.png';

const experiences = [
  {
    role: 'Member of Technical Staff - 1',
    company: 'Nutanix',
    date: 'Feb 2025 – Present',
    logo: NutanixLogo,
    stack: ['Golang', 'Python', 'IAM', 'Distributed Systems'],
    description:
      'Developing backend services on the NCM Self-Service team, building scalable APIs and improving observability.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Nutanix',
    date: 'May 2024 – Aug 2024',
    logo: NutanixLogo,
    stack: ['Golang', 'Kubernetes', 'NATS'],
    description:
      'Integrated NATS JetStream into IAM infrastructure; deployed NATS on Kubernetes; wrote a Go wrapper for user lifecycle notifications.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'Semantic Guard',
    date: 'Dec 2023 – Apr 2024',
    logo: SemanticGuardLogo,
    stack: ['Docker', 'Python', 'Bash', 'ELK Stack'],
    description:
      'Simulated cyber attacks for DoD cybersecurity using Docker; built CI/CD pipelines with Bash/Python; leveraged the ELK stack to detect security incidents.',
  },
  {
    role: 'Software Engineer Intern',
    company: 'General Atomics - Aeronautical Systems',
    date: 'Jun 2023 – Aug 2023',
    logo: GeneralAtomicsLogo,
    stack: ['C', 'Python', 'Embedded Systems', 'Automation'],
    description:
      'Contributed to Flight Critical Software modules for MQ-9 Reaper drones; optimized takeoff/landing algorithms; automated test suites to boost code coverage by 20%.',
  },
  {
    role: 'Research Assistant',
    company: 'University of Maryland',
    date: 'Jan 2023 – May 2024',
    logo: UMDLogo,
    stack: ['Python', 'TensorFlow', 'RNN', 'MCMC'],
    description:
      'Designed RNN-based NLP models for social media sentiment analysis (95% accuracy); correlated weather data & economic damage with R²=0.92.',
  },
  {
    role: 'Course Facilitator, CMSC389G: SWE Role Prep',
    company: 'University of Maryland',
    date: 'Jan 2022 – May 2024',
    logo: SticsLogo,
    stack: ['Java', 'Docker', 'MySQL', 'Python'],
    description:
      'Engineered “Testudo Bank” Java Spring app; coordinated 120+ students’ PRs; wrote Python scripts to populate MySQL test data.',
  },
];

export default function Experience() {
  // 1. Group by the first 4-digit year in each date
  const experiencesByYear = useMemo(() => {
    return experiences.reduce((acc, exp) => {
      // extract first occurrence of YYYY
      const match = exp.date.match(/\d{4}/);
      const year = match ? match[0] : 'Other';
      if (!acc[year]) acc[year] = [];
      acc[year].push(exp);
      return acc;
    }, {});
  }, []);

  // 2. Sort years descending
  const sortedYears = useMemo(
    () =>
      Object.keys(experiencesByYear).sort(
        (a, b) => parseInt(b, 10) - parseInt(a, 10)
      ),
    [experiencesByYear]
  );

  return (
    <AnimatedSection id="experience" className="py-12">
      {/* Section Header */}
      <h2 className="text-3xl font-bold text-center mb-8 text-black dark:text-gray-100">💼 Experience</h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Center line */}
        <div className="absolute top-12 bottom-0 left-1/2 w-px bg-black dark:bg-gray-100" /> {/* ADJUSTED TOP VALUE */}

        <div className="mt-8 space-y-16">
          {sortedYears.map((year) => (
            <React.Fragment key={year}>
              {/* Year Header */}
              <div className="text-center text-xl font-semibold text-gray-600 dark:text-gray-300 mb-8">
                {year}
              </div>

              {/* Entries for this year */}
              {experiencesByYear[year].map((exp, idx) => {
                // overall index to determine side
                const overallIdx = experiences.findIndex((e) => e === exp);

                return (
                  <motion.div
                    key={`${year}-${idx}`}
                    className="relative"
                    initial={{ opacity: 0, x: overallIdx % 2 === 0 ? 100 : -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                  >
                    {/* Dot on the line */}
                    <span
                      className="absolute left-1/2 top-0 -translate-x-1/2
                                 w-3 h-3 bg-indigo-600 rounded-full
                                 border-2 border-white dark:border-gray-900"
                    />

                    {/* Card */}
                    <div
                      className={`
                        mt-4 md:mt-0
                        w-full md:w-5/12
                        ${
                          overallIdx % 2 === 0
                            ? 'md:ml-auto'
                            : 'md:mr-auto'
                        }
                        relative
                        bg-white/80 backdrop-blur-sm rounded-xl
                        p-6 pt-12 shadow-lg
                        transition-transform transform
                        hover:-translate-y-1 hover:shadow-2xl
                      `}
                    >
                      {/* Company Logo */}
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className={`absolute top-4 ${
                          overallIdx % 2 === 0 ? 'left-4' : 'right-4'
                        } w-8 h-8 rounded-md`}
                      />

                      {/* Role & Company */}
                      <h3 className="text-xl font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <time className="block text-sm text-gray-500 mb-2">
                        {exp.date} • {exp.company}
                      </time>

                      {/* Description */}
                      <p className="text-gray-700">{exp.description}</p>

                      {/* Tech stack badges */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-indigo-100
                                       text-indigo-800 rounded-full text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </React.Fragment>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}