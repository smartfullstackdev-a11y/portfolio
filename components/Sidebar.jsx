import Link from 'next/link';
import { useRouter } from 'next/router';
import FilesIcon from './icons/FilesIcon';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import TimeIcon from './icons/TimeIcon';
import MailIcon from './icons/MailIcon';
import AccountIcon from './icons/AccountIcon';
import SettingsIcon from './icons/SettingsIcon';
import styles from '../styles/Sidebar.module.css';

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: '/',
  },
  {
    Icon: TimeIcon,
    path: '/experience',
  },
  {
    Icon: CodeIcon,
    path: '/projects',
  },
  {
    Icon: PencilIcon,
    path: '/story',
  },
  {
    Icon: MailIcon,
    path: '/contact',
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: '/about',
  },
  {
    Icon: SettingsIcon,
    path: '/settings',
  },
];

const Sidebar = () => {
  const router = useRouter();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebarTop}>
        {sidebarTopItems.map(({ Icon, path }, key) => (
          <Link href={path} key={key}>
            <div
              className={`${styles.iconContainer} ${router.pathname === path && styles.active
                }`}
            >
              <Icon
                fill={
                  router.pathname === path
                    ? 'rgb(225, 228, 232)'
                    : 'rgb(106, 115, 125)'
                }
                className={styles.icon}
              />
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebarBottom}>
        {sidebarBottomItems.map(({ Icon, path }, key) => (
          <div className={styles.iconContainer} key={key}>
            <Icon
              fill={
                router.pathname === path
                  ? 'rgb(225, 228, 232)'
                  : 'rgb(106, 115, 125)'
              }
              className={styles.icon}
            />
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
