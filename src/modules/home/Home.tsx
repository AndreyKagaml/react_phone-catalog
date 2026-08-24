import phonesBannerImg from '../../../public/img/banner-1.jpg';
import phonesTabletsImg from '../../../public/img/banner-2.jpg';
import Accessories from '../../../public/img/banner-3.jpg';

import { Banner } from './components/Banner';
import { Categories } from './components/Categories';
import { HotPrices } from './components/HotPrices';
import { NewModels } from './components/NewModels';
import styles from './Home.module.scss';

const slides = [
  { id: '1', image: phonesBannerImg },
  { id: '2', image: phonesTabletsImg },
  { id: '3', image: Accessories },
];

export const Home = () => {
  return (
    <main className={styles.home}>
      <Banner slides={slides} />
      <NewModels />
      <Categories />
      <HotPrices />
    </main>
  );
};
