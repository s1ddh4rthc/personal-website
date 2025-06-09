// src/components/TerminalIntro.jsx
import React, { useState, useEffect, useRef } from 'react';

const script = [
  { text: 'siddharths-mbp:~/personal-website siddharth$ pwd', pause: 800 },
  { text: '/Users/siddharth/Repositories/personal-website', pause: 1000 },
  { text: 'siddharths-mbp:~/personal-website siddharth$ ls', pause: 500 },
  { text: 'node_modules  public  src  package.json  tailwind.config.js', pause: 1200 },
  { text: 'siddharths-mbp:~/personal-website siddharth$ npm run dev', pause: 800 },
  { text: 'vite v4.0.0  ready in 300ms\nLocal: http://localhost:5173', pause: 1000 },
  { text: '', pause: 0 },
];

export default function TerminalIntro({ onDone }) {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState('');
  const idxRef = useRef(0);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;
    const typeLine = async () => {
      const { text, pause } = script[idxRef.current];
      let line = '';
      for (const char of text) {
        if (!mountedRef.current) return;
        line += char;
        setCurrent(line);
        await new Promise((r) => setTimeout(r, 30));
      }
      setLines((prev) => [...prev, line]);
      setCurrent('');
      await new Promise((r) => setTimeout(r, pause));
      idxRef.current++;
      if (idxRef.current < script.length) {
        typeLine();
      } else {
        onDone();
      }
    };
    typeLine();
    return () => { mountedRef.current = false; };
  }, [onDone]);

  return (
    <div className="fixed inset-0 bg-gray-100 dark:bg-gray-900 text-indigo-500 font-mono p-6 z-50 overflow-y-auto">
        <button
        onClick={onDone}
        className="absolute top-4 right-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded text-sm text-white">
            Skip Animation
        </button>
      <div className="space-y-1 text-indigo-600 dark:text-gray-100">
        {lines.map((ln, i) => (
          <div key={i}>{ln}</div>
        ))}
        <div>{current}<span className="animate-blink">█</span></div>
      </div>
    </div>
  );
}
