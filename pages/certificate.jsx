import styles from "../styles/Certificate.module.scss";

const Certificate = () => {
  return (
    <>
      <h3 className={styles.text}>Coming Soon</h3>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Certificate' },
  };
}

export default Certificate;
