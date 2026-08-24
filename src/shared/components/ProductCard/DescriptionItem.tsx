import styles from './DescriptionItem.module.scss';

interface Props {
  title: string;
  text: string;
}

export const DescriptionItem = ({ title, text }: Props) => {
  return (
    <div className={styles.info__item}>
      <span className={styles.item__title}>{title}</span>
      <span className={styles.item__text}>{text}</span>
    </div>
  );
};
