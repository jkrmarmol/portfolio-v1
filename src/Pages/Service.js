import ResponsiveImage from '../Assets/Images/responsive.effb831b.svg';
import DesignImage from '../Assets/Images/design.6bfd83a4.svg';
import TeamImage from '../Assets/Images/team.62482db6.svg';
import { motion, useScroll } from "framer-motion"

function Service() {
  const { scrollYProgress } = useScroll();
  return (
    <motion.section
      id="service"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", mass: 0.5 }}
    >
      <div className="service-title">
          <h1>What I <span>offer?</span></h1>
          <p>Create positive user experience</p>
      </div>
      <div className="flex-container">
        <div className="flex-items">
          <img src={ResponsiveImage} className="responsive" alt="Responsive Web Design" />
          <h2>Responsive Website</h2>
          <p>Develop a responsive website layout for a better user experience.</p>
        </div>
        <div className="flex-items">
          <img src={DesignImage} className="design" alt="Design to Website" />
          <h2>Convert your design into a working website.</h2>
          <p>Make an ideal functional website with your mockups and UI prototypes.</p>
        </div>
        <div className="flex-items">
          <img src={TeamImage} className="team" alt="Team Collaboration" />
          <h2>Team Collaboration</h2>
          <p>Can work as part of a team and has outstanding collaboration skills.</p>
        </div>
      </div>
    </motion.section>
  );
}

export default Service;