import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.section 
      id="intro"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="container">
        <h1>
          <span className="f-letter">H</span>ey, <span className="f-letter">I</span>'m 
          <span className="my-name">
            <span className="f-letter"> K</span>urt
            <span className="f-letter"> R</span>usselle
            <span className="f-letter"> M</span>armol.
          </span>
        </h1>
        <p className="full-stack">I'm an aspiring Full-Stack Developer</p>
        <div className="intro-button">
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
        </div>
      </div>
    </motion.section>
  );
}

export default Home;