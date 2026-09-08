import { Link, UIMatch, useMatches } from 'react-router-dom';

import ArrowIcon from '@/assets/icons/arrow-up.svg?react';
import HomeIcon from '@/assets/icons/home.svg?react';
import { cn } from '@/shared/utils';

import styles from './Breadcrumbs.module.scss';

interface BreadcrumbItem extends UIMatch {
  handle: { breadcrumb: string | ((match: UIMatch) => string) };
}

export const Breadcrumbs = () => {
  const matches = useMatches() as BreadcrumbItem[];

  const items = matches
    .filter(match => match.handle?.breadcrumb)
    .map(match => ({
      name:
        typeof match.handle.breadcrumb === 'function'
          ? match.handle.breadcrumb(match)
          : match.handle.breadcrumb,

      to: match.pathname,
    }));

  return (
    <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
      <ol className={styles.list}>
        <li className={styles.item}>
          <Link to={'/'} className={styles.home}>
            <HomeIcon className={styles.homeIcon} />
          </Link>
        </li>
        {items.map((item, index) => {
          const isLastElement = index === items.length - 1;

          return (
            <li key={item.name} className={styles.item}>
              <ArrowIcon aria-hidden="true" className={styles.arrow} />

              {item.to && !isLastElement ? (
                <Link to={item.to} className={cn(styles.text, styles.link)}>
                  {item.name}
                </Link>
              ) : (
                <span
                  className={cn(styles.text, styles.current)}
                  aria-current={isLastElement ? 'page' : undefined}
                >
                  {item.name}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
