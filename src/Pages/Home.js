import { motion } from 'framer-motion';

function Home() {
  return (
    <section id="intro">
      <div className="container">
        <motion.h1
          initial={{ x: -900, scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, type: 'spring'}}
          animate={{ x: 0, scale: 1, opacity: 1}}
        >
          <span className="f-letter">H</span>ey, <span className="f-letter">I</span>'m 
          <span className="my-name">
            <span className="f-letter"> K</span>urt
            <span className="f-letter"> R</span>usselle
            <span className="f-letter"> M</span>armol.
          </span>
        </motion.h1>
        <motion.p
          className="full-stack"
          initial={{ x: 900, scale: 0.8, opacity: 0 }}
          transition={{ duration: 1, type: 'spring'}}
          animate={{ x: 0, scale: 1, opacity: 1}}
        >
          I'm an aspiring Full-Stack Developer
        </motion.p>
        <motion.div
          className="intro-button"
          initial={{ y: 300, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 1.2}}
        >
          <motion.button
            className="work-together"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
          >
            Let's work together
          </motion.button>
          <motion.button
            className="check-project"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.9 }}
          >
          Check out my project
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;