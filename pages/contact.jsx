import { useState } from 'react';
import ContactCode from '../components/ContactCode';
import styles from '../styles/ContactPage.module.scss';

const ContactPage = () => {

  return (
    <div className={styles.container}>
      <div>
        <h2 className={styles.heading}>Reach Out Via Socials</h2>
        <ContactCode />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Contact' },
  };
}

export default ContactPage;
