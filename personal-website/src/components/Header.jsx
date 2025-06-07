import { useEffect, useState } from 'react';

export default function Header() {
  // We’ll sync this with localStorage and html.classList
  const [darkMode, setDarkMode] = useState(false);

  // On mount, read stored preference or OS setting
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark') {
      setDarkMode(true);
    } else if (stored === 'light') {
      setDarkMode(false);
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, []);

  // Whenever darkMode changes, update <html> and localStorage
  useEffect(() => {
    const html = document.documentElement;
    if (darkMode) {
      html.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      html.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-0 z-50 bg-white bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80 backdrop-blur-md">
      <div className="max-w-4xl mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-xl font-semibold">Siddharth Cherukupalli</h1>
        <nav>
          <ul className="flex items-center space-x-6">
            <li><a href="#about" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">About</a></li>
            <li><a href="#projects" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Projects</a></li>
            <li><a href="#experience" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Experience</a></li>
            <li><a href="#contact" className="text-gray-700 dark:text-gray-200 hover:text-indigo-500 transition">Contact</a></li>
            <li>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="ml-4 p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                aria-label="Toggle dark mode"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
