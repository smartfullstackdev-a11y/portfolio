import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/Projects.module.scss';

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <div className={styles.projects}>
        {
          projects.map((project) => (
            <ProjectCard
              title={project.title}
              desc={project.description}
              skillset={project.tags}
              link={project.link}
            />
          ))
        }
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
