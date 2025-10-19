import { motion } from 'framer-motion';

export default function Card({ children, className = '', hover = true, variant = 'default' }) {
  const variants = {
    default: 'bg-white border border-forest/10',
    subtle: 'bg-white/50 backdrop-blur-sm border border-forest/5',
    ghost: 'bg-transparent',
  };

  return (
    <motion.div
      className={`rounded-2xl p-8 ${variants[variant]} ${className}`}
      whileHover={hover ? { y: -4, boxShadow: '0 8px 40px rgba(17, 60, 54, 0.08)' } : {}}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
