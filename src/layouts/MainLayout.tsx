import { Outlet } from 'react-router-dom';

import { Footer, Header } from '../shared/components';

//import styles from './MainLayout.module.scss';

export const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
