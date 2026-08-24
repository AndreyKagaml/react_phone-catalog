import Heart from '@/assets/icons/heart.svg?react';
import { Button, CircleButton } from '@/shared/components/ui';
import { Product } from '@/shared/types';

import { DescriptionItem } from './DescriptionItem';
import styles from './ProductCard.module.scss';

interface Props {
  product: Product;
  withDiscount?: boolean;
}

export const ProductCard = ({ product, withDiscount = false }: Props) => {
  const { image, name, price, fullPrice, screen, capacity, ram } = product;

  return (
    <article className={styles.card}>
      <img className={styles.card__img} src={image} alt="" />

      <h3 className={styles.card__title}>{name}</h3>
      <div className={styles.card__price}>
        <span
          className={styles.price}
        >{`$${withDiscount ? price : fullPrice}`}</span>
        {withDiscount && (
          <span className={`${styles.price} ${styles.price__full}`}>
            {`$${fullPrice}`}
          </span>
        )}
      </div>
      <div className={styles.card__line} />
      <div className={styles.card__info}>
        <DescriptionItem title={'Screen'} text={screen} />
        <DescriptionItem title={'Capacity'} text={capacity} />
        <DescriptionItem title={'RAM'} text={ram} />
      </div>

      <div className={styles.card__buttons}>
        <Button className={styles.button__add}>
          <span>Add to cart</span>
        </Button>
        <CircleButton>
          <Heart />
        </CircleButton>
      </div>
    </article>
  );
};
