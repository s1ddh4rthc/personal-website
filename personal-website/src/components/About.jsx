import React, { useMemo } from 'react';
import AnimatedSection from './AnimatedSection';
import Tilt from 'react-parallax-tilt';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail } from 'lucide-react';
import profilePic from '../assets/profile_pic.png';

const roles = [
  'Backend Software Engineer',
  'Cloud Infrastructure Advocate',
  'Distributed Systems Enthusiast',
];

const skills = [
  'Java',
  'Golang',
  'Python',
  'AWS',
  'Docker',
  'Kubernetes',
];

export default function About() {

  return (
    <AnimatedSection id="about" className="relative py-16">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
        
        {/* 1. Photo + decorative blob */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-48 h-48 bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 rounded-full filter blur-3xl opacity-50 animate-blob mix-blend-multiply"></div>
          <Tilt glareEnable glareMaxOpacity={0.2} scale={1.02} transitionSpeed={250}>
            <img
              src={profilePic}
              alt="Siddharth Cherukupalli"
              className="w-40 h-40 rounded-full border-4 border-indigo-500 object-cover"
            />
          </Tilt>
        </div>

        <div className="text-center md:text-left space-y-4">
          <h1 className="text-4xl font-bold text-black dark:text-white">Hi, I'm Siddharth.</h1>
          
          {/* Rotating roles */}
          <h2 className="text-2xl font-semibold text-indigo-500 mt-1">
            <Typewriter
              words={roles}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto md:mx-0">
            I’m a Software Engineer I at Nutanix, building Nutanix Cloud Manager’s
            Self-Service APIs. I love distributed systems, cloud computing, and ML.
            B.S. in Computer Science, UMD College Park.
          </p>

          {/* 3. Skill badges */}
          <div className="flex flex-wrap justify-center md:justify-start gap-2 mt-4">
            {skills.map(skill => (
              <span
                key={skill}
                className="px-3 py-1 bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* 4. Socials + actions */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 mt-6 text-black dark:text-white">
            <Github className="w-6 h-6 hover:text-indigo-500 transition-colors" />
            <Linkedin className="w-6 h-6 hover:text-indigo-500 transition-colors" />
            <Mail      className="w-6 h-6 hover:text-indigo-500 transition-colors" />
            <a
              href="/resume.pdf"
              className="px-4 py-2 border border-indigo-600 text-indigo-600 dark:text-white rounded-md hover:bg-indigo-600 hover:text-white transition-colors whitespace-nowrap"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
