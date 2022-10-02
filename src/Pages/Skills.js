import { useSelector } from 'react-redux';
import { selectSkills } from '../Redux/skillsSlices';


function Skills() {
  const skills = useSelector(selectSkills);
  return (
    <section id="skills">
      <div className="skill-title">
        <h1>My <span>Skills</span></h1>
        <p>I am currently improving these technologies.</p>
      </div>
      <div className="flex-container">
        {
          skills.map((skill, index) => {
            return (
              <div className="flex-items" key={index}>
                <img src={skill.image} alt={skill.alt}/>
                <p>{skill.name}</p>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}

export default Skills;