import { useTranslation } from 'react-i18next';
import { NavLink, useNavigate } from 'react-router-dom';

import cart from '@/assets/icons/cart.svg';
import heart from '@/assets/icons/heart.svg';
import { Button } from '@/shared/components/ui';
import { ROUTES } from '@/shared/constants';
import { useBodyScrollLock } from '@/shared/hooks';
import { cn } from '@/shared/utils';

import styles from './Menu.module.scss';

type MenuProps = {
  isVisible: boolean;
};

export const Menu = ({ isVisible }: MenuProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useBodyScrollLock(Boolean(isVisible));

  return (
    <aside
      id="mobile-menu"
      className={cn(styles.menu, { [styles.open]: isVisible })}
    >
      <nav className={styles.nav}>
        <NavLink className={styles.link} to={ROUTES.HOME}>
          {t('home')}
        </NavLink>
        <NavLink className={styles.link} to={ROUTES.PHONES}>
          {t('phones')}
        </NavLink>
        <NavLink className={styles.link} to={ROUTES.TABLETS}>
          {t('tablets')}
        </NavLink>
        <NavLink className={styles.link} to={ROUTES.ACCESSORIES}>
          {t('accessories')}
        </NavLink>
      </nav>

      <div className={styles.nav__block}>
        <Button
          className={styles.menu__button}
          aria-label="Wishlist"
          onClick={() => navigate(ROUTES.FAVORITES)}
        >
          <img className={styles.menu__img} src={heart} alt="" />
        </Button>
        <Button className={styles.menu__button} aria-label="Cart">
          <img className={styles.menu__img} src={cart} alt="" />
        </Button>
      </div>
    </aside>
  );
};
