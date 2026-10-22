import Link from 'next/link';
import Image from 'next/image';
import { Children, useState } from 'react';
import ChevronRight from '../components/icons/ChevronRight';
import classNames from 'classnames';
import styles from '../styles/Explorer.module.css';

const explorerItems = [
  {
    name: 'src',
    path: '/',
    icon: 'folder_icon.svg',
    children: [
      {
        name: 'experience.tsx',
        path: '/experience',
        icon: 'react_icon.svg',
      },
      {
        name: 'skill.tsx',
        path: '/skill',
        icon: 'react_icon.svg',
      },
      {
        name: 'projects.tsx',
        path: '/projects',
        icon: 'react_icon.svg',
      },
      {
        name: 'certificate.tsx',
        path: '/certificate',
        icon: 'react_icon.svg',
      },
    ]
  },
  {
    name: 'index.html',
    path: '/',
    icon: 'html_icon.svg',
  },
  {
    name: 'contact.scss',
    path: '/contact',
    icon: 'scss_icon.svg',
  },
  {
    name: 'story.md',
    path: '/story',
    icon: 'markdown_icon.svg',
  },
];

const Explorer = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div>
        <input
          type="checkbox"
          className={styles.checkbox}
          id="portfolio-checkbox"
          checked={portfolioOpen}
          onChange={() => setPortfolioOpen(!portfolioOpen)}
        />
        <label htmlFor="portfolio-checkbox" className={styles.heading}>
          <ChevronRight
            className={styles.chevron}
            style={portfolioOpen ? { transform: 'rotate(90deg)' } : {}}
          />
          Portfolio
        </label>
        <div
          className={styles.files}
          style={portfolioOpen ? { display: 'block' } : { display: 'none' }}
        >
          {explorerItems.map((item, key) => (
            <div key={key}>
              <Link href={item.path} key={item.name}>
                <div className={styles.file}>
                  <Image
                    src={`/${item.icon}`}
                    alt={item.name}
                    height={18}
                    width={18}
                  />{' '}
                  <p>{item.name}</p>
                </div>
              </Link>
              {item.children && (
                item.children.map(child => (
                  <Link href={child.path} key={child.name}>
                    <div className={classNames(styles.file, styles.child)}>
                      <Image
                        src={`/${child.icon}`}
                        alt={child.name}
                        height={18}
                        width={18}
                      />{' '}
                      <p>{child.name}</p>
                    </div>
                  </Link>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
