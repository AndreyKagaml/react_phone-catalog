import accessoriesImg from '../../../../../public/img/category-accessories.png';
import phonesImg from '../../../../../public/img/category-phones.png';
import tabletsImg from '../../../../../public/img/category-tablets.png';

import styles from './Categories.module.scss';
import { CategoryItem } from './CategoryItem';

export const Categories = () => {
  return (
    <section className={styles.categories}>
      <h2 className={styles.title}>Shop by category</h2>

      <div className={styles.cards}>
        <CategoryItem
          image={phonesImg}
          name={'Mobile phones'}
          link={'/phones'}
          count={95}
        />
        <CategoryItem
          image={tabletsImg}
          name={'Tablets'}
          link={'/tablets'}
          count={25}
        />
        <CategoryItem
          image={accessoriesImg}
          name={'Accessories'}
          link={'/accessories'}
          count={100}
        />
      </div>
    </section>
  );
};
