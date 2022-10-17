import { motion } from 'framer-motion';

function SideLeftDesign() {
  return (
    <div orientation="left" className="side-left">
      <ul>
        <li>
          <a href="https://github.com/jkrmarmol" target="_blank" rel="noreferrer">
            <motion.i 
              className='bx bxl-github'
              whileHover={{ scale: 1.3 }}
            >
            </motion.i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/jkrmarmol" target="_blank" rel="noreferrer">
            <motion.i
              className='bx bxl-twitter'
              whileHover={{ scale: 1.3 }}
            >
            </motion.i>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/jkrmarmol/" target='_blank' rel="noreferrer">
          <motion.i
              className='bx bxl-linkedin'
              whileHover={{ scale: 1.3 }}
            >
            </motion.i>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/jkrmarmol">
          <motion.i
              className='bx bxl-meta'
              whileHover={{ scale: 1.3 }}
            >
            </motion.i>
          </a>
        </li>
        <li className="vertical-line"></li>
      </ul>
    </div>
  );
}

export default SideLeftDesign;
