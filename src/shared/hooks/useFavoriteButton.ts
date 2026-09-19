import { useDispatch, useSelector } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '@/redux/favoritesSlice';

export const useFavoriteButton = (product_id: string) => {
  const dispatch = useDispatch();
  const favoriteIds = useSelector(state => state.favorites.favorite_ids);
  const isFavorite = favoriteIds.includes(product_id);

  const onFavoriteClick = (event: React.MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();

    if (isFavorite) {
      dispatch(removeFromFavorites(product_id));
    } else {
      dispatch(addToFavorites(product_id));
    }
  };

  return { isFavorite, onFavoriteClick };
};
