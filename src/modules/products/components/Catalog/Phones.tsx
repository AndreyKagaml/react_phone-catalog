import { PRODUCT_CATEGORIES } from '@/modules/products/constants';

import { Catalog } from './Catalog';

export const Phones = () => {
  return (
    <Catalog
      categoryName={'Mobile phones'}
      category={PRODUCT_CATEGORIES.phones}
    />
  );
};
