/* eslint-disable no-console */
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import HeartActive from '@/assets/icons/heart-active.svg?react';
import Heart from '@/assets/icons/heart.svg?react';
import { removeFromFavorites, addToFavorites } from '@/redux/favoritesSlice';
import { Property } from '@/shared/components';
import { AccentButton, CircleButton, Line } from '@/shared/components/ui';
import { Product } from '@/shared/types';
import { cn, getImageUrl } from '@/shared/utils';

import styles from './ProductCard.module.scss';
interface Props {
  product: Product;
  withDiscount?: boolean;
  className?: string;
}

export const ProductCard = ({
  product,
  withDiscount = false,
  className = '',
}: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const favoriteIds = useSelector(state => state.favorites.favorite_ids);
  const isFavorite = favoriteIds.includes(product.itemId);

  const {
    image,
    name,
    price,
    fullPrice,
    screen,
    capacity,
    ram,
    category,
    itemId,
  } = product;

  const handleFavoriteClick = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(product.itemId));
    } else {
      dispatch(addToFavorites(product.itemId));
    }
  };

  return (
    <Link to={`/${category}/${itemId}`} className={cn(styles.card, className)}>
      <img className={styles.card__img} src={getImageUrl(image)} alt={name} />

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
      <Line />
      <div className={styles.card__info}>
        <Property title={t('screen')} text={screen} />
        <Property title={t('capacity')} text={capacity} />
        <Property title={t('ram')} text={ram} />
      </div>

      <div className={styles.card__buttons}>
        <AccentButton title={t('addToCart')} />
        <CircleButton onClick={handleFavoriteClick}>
          {isFavorite ? <HeartActive /> : <Heart />}
        </CircleButton>
      </div>
    </Link>
  );
};
