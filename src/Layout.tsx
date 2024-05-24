import { motion } from 'framer-motion';
import React from 'react';

export default function Layout({ children }) {
  return (
    <div>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            y: 20,
            opacity: 0,
            scale: 0.99,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.4,
              ease: 'easeInOut',
              when: 'beforeChildren',
            },
          },
        }}
      >
        <main className="m-10 min-h-screen p-10 lg:m-20 lg:px-20 lg:pt-20">
          {children}
        </main>
      </motion.div>
    </div>
  );
}
