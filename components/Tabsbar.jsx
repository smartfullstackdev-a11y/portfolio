import Tab from './Tab';
import styles from '../styles/Tabsbar.module.css';

const Tabsbar = () => {
  return (
    <div className={styles.tabs}>
      <Tab icon="/html_icon.svg" filename="index.html" path="/" />
      <Tab icon="/react_icon.svg" filename="experience.tsx" path="/experience" />
      <Tab icon="/react_icon.svg" filename="skill.tsx" path="/skill" />
      <Tab icon="/react_icon.svg" filename="projects.tsx" path="/projects" />
      <Tab icon="/react_icon.svg" filename="certificate.tsx" path="/certificate" />
      <Tab icon="/scss_icon.svg" filename="contact.scss" path="/contact" />
      <Tab icon="/markdown_icon.svg" filename="story.md" path="/story" />
    </div>
  );
};

export default Tabsbar;
