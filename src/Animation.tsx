import { motion } from 'framer-motion';

export default function Animation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <motion.div
        initial="pageInitial"
        animate="pageAnimate"
        variants={{
          pageInitial: {
            y: '-100vh',
            opacity: 0,
            scale: 1,
          },
          pageAnimate: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
              duration: 0.6,
              ease: 'easeInOut',
              when: 'beforeChildren',
            },
          },
        }}
      >
        <main className="">{children}</main>
      </motion.div>
    </div>
  );
}
