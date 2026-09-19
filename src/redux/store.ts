import { configureStore } from '@reduxjs/toolkit';

import { favoritesReducer } from '@/redux/favoritesSlice';

const savedFavorites = localStorage.getItem('favorites');

const preloadedState = {
  favorites: {
    favorite_ids: savedFavorites ? JSON.parse(savedFavorites) : [],
  },
};

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  const favoriteIds = store.getState().favorites.favorite_ids;

  if (favoriteIds.length > 0) {
    localStorage.setItem('favorites', JSON.stringify(favoriteIds));
  } else {
    localStorage.removeItem('favorites');
  }
});
