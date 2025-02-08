import React from 'react';
import SkillBox from './SkillBox';
import styles from './Skills.module.css';
import { JavaScriptIcon, CssIcon, ReactIcon, ReduxIcon, HtmlIcon, NextIcon, PhpIcon, TailwindIcon, PostgreSqlIcon, MariaDbIcon, ExpressIcon, KotlinIcon, GithubIcon, BashIcon, JsonIcon, PostmanIcon, DockerIcon, PhpMyAdminIcon, WordpressIcon } from '../assets/icons';

const Skills = () => {
  const frontendSkills = [
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Css", icon: <CssIcon /> },
    { name: "React", icon: <ReactIcon /> },
    { name: "Redux", icon: <ReduxIcon /> },
    { name: "Html", icon: <HtmlIcon /> },
    { name: "Next", icon: <NextIcon /> },
    { name: "Php", icon: <PhpIcon /> },
    { name: "Tailwind", icon: <TailwindIcon /> },
  ];

  const backendSkills = [
    { name: "PostgreSql", icon: <PostgreSqlIcon /> },
    { name: "MariaDb", icon: <MariaDbIcon /> },
    { name: "Express", icon: <ExpressIcon /> },
  ];

  const languages = [
    { name: "JavaScript", icon: <JavaScriptIcon /> },
    { name: "Kotlin", icon: <KotlinIcon /> },
  ];

  const tools = [
    { name: "Github", icon: <GithubIcon /> },
    { name: "Bash", icon: <BashIcon /> },
    { name: "Json", icon: <JsonIcon /> },
    { name: "Postman", icon: <PostmanIcon /> },
    { name: "Docker", icon: <DockerIcon /> },
    { name: "Wordpress", icon: <WordpressIcon /> },
    { name: "PhpMyAdmin", icon: <PhpMyAdminIcon /> },
  ];

  const renderSkills = (skills, title) => (
    <>
      <h4>{title}</h4>
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
