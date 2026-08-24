import { Link } from 'react-router-dom';

import ArrowUp from '@/assets/icons/arrow-up.svg?react';
import Logo from '@/assets/images/logo.svg?react';
import { CircleButton } from '@/shared/components/ui';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo} aria-label="Nice Gadgets — Home">
        {/* <img src={logo} alt="Logo" width={89} height={32} /> */}
        <Logo className={styles.logo__img} />
      </Link>

      <nav className={styles.nav}>
        <a href="#">Github</a>
        <a href="#">Contacts</a>
        <a href="#">rights</a>
      </nav>

      <div className={styles.back}>
        <span className={styles.back__text}>Back to top</span>
        <CircleButton
          className={styles.back__button}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth',
            });
          }}
        >
          <ArrowUp />
        </CircleButton>
      </div>
    </footer>
  );
};
