import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Button({
  children,
  variant = 'primary',
  to,
  href,
  onClick,
  className = '',
  ...props
}) {
  const baseClasses = 'inline-block px-8 py-3 rounded-lg font-medium transition-all duration-300 animation-smooth';

  const variants = {
    primary: 'bg-lime text-forest hover:bg-lime-hover hover:-translate-y-0.5 hover:shadow-lg',
    secondary: 'bg-transparent border-2 border-forest text-forest hover:bg-forest hover:text-white',
    ghost: 'text-forest hover:text-lime',
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  const content = (
    <motion.span
      className="inline-block"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes} {...props}>
      {content}
    </button>
  );
}
