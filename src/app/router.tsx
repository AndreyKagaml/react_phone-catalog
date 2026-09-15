import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { ProductsLayout } from '@/layouts/ProductsLayout';
import { Home } from '@/modules/home';
import { Accessories } from '@/modules/products/components/Catalog/Accessories';
import { Phones } from '@/modules/products/components/Catalog/Phones';
import { Tablets } from '@/modules/products/components/Catalog/Tablets';
import { ProductDetails } from '@/modules/products/components/ProductDetails';
import { ROUTES } from '@/shared/constants';

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <ProductsLayout />,
        children: [
          {
            path: ROUTES.PHONES,
            element: <Phones />,
          },
          {
            path: 'phones/:id',
            element: <ProductDetails />,
          },
          {
            path: ROUTES.TABLETS,
            element: <Tablets />,
          },
          {
            path: 'tablets/:id',
            element: <ProductDetails />,
          },
          {
            path: ROUTES.ACCESSORIES,
            element: <Accessories />,
          },
          {
            path: 'accessories/:id',
            element: <ProductDetails />,
          },
        ],
      },
    ],
  },
]);
