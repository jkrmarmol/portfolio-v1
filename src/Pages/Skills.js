import { useSelector } from 'react-redux';
import { selectSkills } from '../Redux/skillsSlices';
import { motion } from 'framer-motion';

function Skills() {
  const skills = useSelector(selectSkills);
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 0.9 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
    >
      <div className="skill-title">
        <h1>My <span>Skills</span></h1>
        <p>I am currently improving these technologies.</p>
      </div>
      <div className="flex-container">
        {
          skills.map((skill, index) => {
            return (
              <motion.div
                className="flex-items"
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
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
      </div>
    </motion.section>
  );
}

export default Skills;