import React from 'react';
import SkillBox from './SkillBox';
import styles from './Skills.module.css';

const Skills = () => {
  const frontendSkills = ["JavaScript", "CSS", "React", "Redux", "HTML", "JSX", "Next.js", "Php", "Tailwind"];
  const backendSkills = ["PostgreSQL", "Express.js"];
  const languages = ["JavaScript", "Kotlin", "SQL"];
  const tools = ["Github", "Bash", "JSON/API", "Postman", "Docker", "Wordpress"];

  const renderSkills = (skills, title) => (
    <>
      <h3>{title}</h3>
      <div className={styles.sections}>
        {skills.map((skill, i) => (
          <SkillBox key={`box_${i}`} skill={skill} />
        ))}
      </div>
    </>
  );

  return (
    <section className={`wrap ${styles.mainContainer}`} id="Skills">
      <div className={`content ${styles.skillsContainer}`}>
        <h2 className={`title`}>Skills</h2>
        <div className={styles.content}>
          {renderSkills(frontendSkills, "Frontend")}
          {renderSkills(tools, "Tools")}
          {renderSkills(languages, "Languages")}
          {renderSkills(backendSkills, "Backend")}
        </div>
      </div>
    </section>
  );
};

export default Skills;
