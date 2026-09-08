import HomeIcon from '@/assets/icons/home.svg?react';
import { Button } from '@/shared/components/ui';
import { cn } from '@/shared/utils';

import NotFoundPicture from '../../../../../public/img/product-not-found.png';

import styles from './NotFoundLabel.module.scss';

interface Props {
  className?: string;
  handleClick: () => void;
}

export const NotFoundLabel = ({ className, handleClick }: Props) => {
  return (
    <div className={cn(styles.notFound, className)}>
      <img
        src={NotFoundPicture}
        className={styles.picture}
        alt="Nothing found"
      />
      <h2 className={styles.description}>Nothing found for your query</h2>
      <Button className={styles.button} onClick={handleClick}>
        <HomeIcon className={styles.button__icon} />
        <span className={styles.button__title}>Go to home</span>
      </Button>
    </div>
  );
};
