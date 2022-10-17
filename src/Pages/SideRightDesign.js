import { motion } from 'framer-motion';

function SideRightDesign() {
  return (
    <div orientation="right" className="side-right">
      <motion.a 
        href="mailto:jkurtrussellemarmo@gmail.com"
        whileHover={{ scale: 1.2 }}
      >
      jkurtrussellemarmol@gmail.com
      </motion.a>
      <div className="vertical-line"></div>
    </div>
  );
}

export default SideRightDesign;