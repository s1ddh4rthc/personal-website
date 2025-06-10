import React from 'react';

import VantaBackground from './components/VantaBackground'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'
import TerminalIntro from './components/TerminalIntro'
import SkillsRadar from './components/SkillsRadar';

export default function App() {

  const [introDone, setIntroDone] = React.useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-100 dark:bg-gray-900">
      <ScrollProgress />
      {/* <VantaBackground /> */}
      {!introDone && <TerminalIntro onDone={() => setIntroDone(true)} />}

      <div className="relative z-10">
        <Header />
        <main className="max-w-4xl mx-auto px-6 sm:px-12 space-y-20 py-16">
          {introDone && (
            <>
              <About />
              <Experience />
              <SkillsRadar />
              <Projects />
              <Contact />    
            </>
          )}
          </main>
        <Footer />
      </div>
    </div>
  );
}

