// src/components/AnimatedSection.jsx
import { motion } from 'framer-motion';

export default function AnimatedSection({ children, className = '', id }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.section>
  );
}
