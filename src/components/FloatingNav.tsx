import { motion } from "framer-motion"; 
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export function FloatingNav() {
  const socialLinks = [
    { icon: Github, href: 'https://github.com/TUSHAR24550', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/tushar720614325/', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: 'https://www.instagram.com/tushar_bandhu/', label: 'Instagram' },
    { icon: Mail, href: 'mailto:tushar.24550@sscbs.du.ac.in', label: 'Email' },
  ];

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block"
    >
      <div className="bg-white/10 dark:bg-white/5 backdrop-blur-xl border border-gray-300 dark:border-white/10 rounded-full p-3 flex flex-col gap-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 + index * 0.1 }}
            whileHover={{ scale: 1.2, x: -5 }}
            whileTap={{ scale: 0.9 }}
            className="text-gray-600 dark:text-white/60 hover:text-gray-900 dark:hover:text-white transition-colors group relative"
            aria-label={link.label}
          >
            <link.icon size={20} />
            <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white/20 dark:bg-white/10 backdrop-blur-xl px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none text-gray-900 dark:text-white">
              {link.label}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}