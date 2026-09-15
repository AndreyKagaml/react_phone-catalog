import styles from './AccentButton.module.scss';
import { Button } from './Button';

interface Props {
  title: string;
}

export const AccentButton = ({ title }: Props) => {
  return (
    <Button className={styles.button}>
      <span className={styles.title}>{title}</span>
    </Button>
  );
};
