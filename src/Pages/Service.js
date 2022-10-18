import ResponsiveImage from '../Assets/Images/responsive.effb831b.svg';
import DesignImage from '../Assets/Images/design.6bfd83a4.svg';
import TeamImage from '../Assets/Images/team.62482db6.svg';
import { motion } from "framer-motion"

function Service() {
  return (
    <motion.section id="service" >
      <div
        className="service-title"
      >
          <motion.h1 
            initial={{ y: -500, opacity: 0 }}
            animate={{ y: 0, opacity: 1}}
            transition={{ type: 'tween' }}
          >
          What I <span>offer?</span>
          </motion.h1>
          <motion.p
            initial={{ x: -500, opacity: 1 }}
            animate={{ x: 0, opacity: 1}}
            transition={{ type: 'tween' }}
          >Create positive user experience</motion.p>
      </div>
      <div className="flex-container">
        <motion.div
          className="flex-items"
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1.50, type: 'spring', bounce: 0.25 }}
        >
          <motion.img
            src={ResponsiveImage}
            className="responsive"
            alt="Responsive Web Design"
            whileHover={{ scale: 1.1}}
          />
          <h2>Responsive Website</h2>
          <p>Develop a responsive website layout for a better user experience.</p>
        </motion.div>
        <motion.div
          className="flex-items"
          initial={{ y: 500, opacity: 0 }}
          animate={{ y: 0, opacity: 1}}
          transition={{ duration: 1.50, type: 'spring', bounce: 0.25 }}
        >
          <motion.img 
            src={DesignImage} 
            className="design" 
            alt="Design to Website"
            whileHover={{ scale: 1.1}}
          />
          <h2>Convert your design into a working website.</h2>
          <p>Make an ideal functional website with your mockups and UI prototypes.</p>
        </motion.div>
        <motion.div
          className="flex-items"
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1}}
          transition={{ duration: 1.50, type: 'spring', bounce: 0.25 }}
        >
          <motion.img
            src={TeamImage} 
            className="team" 
            alt="Team Collaboration" 
            whileHover={{ scale: 1.1}}
          />
          <h2>Team Collaboration</h2>
          <p>Can work as part of a team and has outstanding collaboration skills.</p>
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Service;