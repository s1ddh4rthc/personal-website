import { useState, useEffect } from 'react';

export default function ScrollProgress() {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setPercent(scrolled);
    };

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
    // Initialize on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-indigo-500 dark:bg-indigo-300 transition-all duration-75 ease-out"
        style={{ width: `${percent}%` }}
      />
    </div>
  );
}
