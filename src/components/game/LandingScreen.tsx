import { motion } from "motion/react";
import { Rocket, Sparkles } from "lucide-react";

interface Props {
  onStart: () => void;
}

export function LandingScreen({ onStart }: Props) {
  return (
    <section className="relative flex min-h-[100dvh] flex-col items-center justify-center px-5 py-16 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass mb-8 inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.28em] text-muted-foreground"
      >
        <Sparkles className="h-3.5 w-3.5 text-secondary" />
        Career Discovery Game
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
        className="text-6xl sm:text-7xl"
      >
        🚀
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="mt-6 font-display text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl"
      >
        WHAT&apos;S YOUR
        <br />
        <span className="text-gradient">FUTURE SCORE?</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.35, duration: 0.6 }}
        className="mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl"
      >
        Your interests. Your skills. Your possible future.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-muted-foreground"
      >
        {["10 Questions", "3 Minutes", "1 Future Profile"].map((chip) => (
          <span key={chip} className="glass rounded-full px-4 py-2 tracking-wide">
            {chip}
          </span>
        ))}
      </motion.div>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        onClick={onStart}
        className="glow-primary mt-12 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 font-display text-lg font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 sm:text-xl"
      >
        Start Your Future
        <Rocket className="h-5 w-5" />
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-6 max-w-sm text-sm text-muted-foreground"
      >
        No right answers. Just choose what feels most like you.
      </motion.p>
    </section>
  );
}
