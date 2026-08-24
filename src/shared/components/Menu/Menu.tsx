import { NavLink } from 'react-router-dom';

import cart from '@/assets/icons/cart.svg';
import heart from '@/assets/icons/heart.svg';
import { Button } from '@/shared/components/ui';
import { useBodyScrollLock } from '@/shared/hooks';
import { cn } from '@/shared/utils';

import styles from './Menu.module.scss';

type MenuProps = {
  isVisible: boolean;
};

export const Menu = ({ isVisible }: MenuProps) => {
  useBodyScrollLock(Boolean(isVisible));

  return (
    <aside
      id="mobile-menu"
      className={cn(styles.menu, { [styles.open]: isVisible })}
    >
      <nav className={styles.nav}>
        <NavLink className={styles.link} to="/">
          Home
        </NavLink>
        <NavLink className={styles.link} to="/phones">
          Phones
        </NavLink>
        <NavLink className={styles.link} to="/tablets">
          Tablets
        </NavLink>
        <NavLink className={styles.link} to="/accessories">
          Accessories
        </NavLink>
      </nav>

      <div className={styles.nav__block}>
        <Button className={styles.menu__button} aria-label="Wishlist">
          <img className={styles.menu__img} src={heart} alt="" />
        </Button>
        <Button className={styles.menu__button} aria-label="Cart">
          <img className={styles.menu__img} src={cart} alt="" />
        </Button>
      </div>
    </aside>
  );
};
