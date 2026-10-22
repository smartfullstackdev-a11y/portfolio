import styles from '../styles/HomePage.module.scss';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.name}>
          <div className={styles.overlay}>Kevin Hernandez</div>
          <div className={styles.text}>Kevin Hernandez</div>
        </div>
        <div className={styles.title}>
          Senior Full Stack Developer
        </div>
        <img className={styles.deal} src="/imgs/deal.gif" alt="deal" />
        <video autoPlay muted loop className={styles.video}>
          <source src="/videos/animation.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}
