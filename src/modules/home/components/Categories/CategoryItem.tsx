import { Link } from 'react-router-dom';

import styles from './CategoryItem.module.scss';

interface Props {
  image: string;
  name: string;
  link: string;
  count: number;
}

export const CategoryItem = ({ image, name, link, count }: Props) => {
  return (
    <article className={styles.category}>
      <Link to={link} className={styles.category__link}>
        <img className={styles.category__img} src={image} alt="" />

        <h3 className={styles.category__title}>{name}</h3>
        <p className={styles.category__description}>{count} models</p>
      </Link>
    </article>
  );
};
