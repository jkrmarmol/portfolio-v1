import { useSelector } from 'react-redux';
import { selectSkills } from '../Redux/skillsSlices';
import { motion } from 'framer-motion';

function Skills() {
  const skills = useSelector(selectSkills);
  return (
    <motion.section
      id="skills"
      
    >
      <motion.div
        className="skill-title"
        initial={{ y: -400, scale: 0.5}}
        animate={{ y: 0, scale: 1}}
        
      >
        <h1>My <span>Skills</span></h1>
        <p>I am currently improving these technologies.</p>
      </motion.div>
      <motion.div
        className="flex-container"
        initial={{ scale: 0.7, y: 500 }}
        animate={{ y: 0, scale: 1}}
        transition={{ duration: 0.5}}
      >
        {
          skills.map((skill, index) => {
            return (
              <motion.div
                className="flex-items"
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ 
                  scale: 0.9,
                  transition: { type: 'spring', stiffness: 100 }
                }}
                animate={{ rotate: [0, 10, -10, 0]}}
                drag
              >
                <img 
                  src={skill.image}
                  alt={skill.alt}
                />
                <p>{skill.name}</p>
              </motion.div>
            );
          })
        }
      </motion.div>
    </motion.section>
  );
}

export default Skills;