import styles from '../styles/ContactCode.module.scss';

const contactItems = [
  {
    social: 'Email',
    link: 'hernandez.k.tech@gmail.com',
    href: 'mailto:hernandez.k.tech@gmail.com',
  },
  {
    social: 'Github',
    link: 'kevin-hernandez',
    href: '',
  },
  {
    social: 'Whatsapp',
    link: '+45 65 74 06 68',
    href: '',
  },
  {
    social: 'Discord',
    link: 'hellokevin',
    href: '',
  },
  {
    social: 'Skype',
    link: 'live:.cid.5586e8755165436b',
    href: 'https://join.skype.com/invite/qhgrkekB7wgK',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          {
            item.href ? (
              <a href={item.href} target="_blank" rel="noopener">
                {item.link}
              </a>
            ) : (
              <span>{item.link}</span>
            )
          }
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
