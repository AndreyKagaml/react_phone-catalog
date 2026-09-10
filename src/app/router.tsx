import { createBrowserRouter } from 'react-router-dom';

import { MainLayout } from '@/layouts/MainLayout';
import { ProductsLayout } from '@/layouts/ProductsLayout';
import { Home } from '@/modules/home';
import { Accessories } from '@/modules/products/components/Catalog/Accessories';
import { Phones } from '@/modules/products/components/Catalog/Phones';
import { Tablets } from '@/modules/products/components/Catalog/Tablets';
import { ProductDetails } from '@/modules/products/components/ProductDetails';

export const router = createBrowserRouter([
  {
    path: '/',
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
            path: 'phones',
            element: <Phones />,
            handle: {
              breadcrumb: 'Phones',
            },
          },
          {
            path: 'phones/:id',
            element: <ProductDetails />,
            handle: {
              breadcrumb: ':id',
            },
          },
          {
            path: 'tablets',
            element: <Tablets />,
            handle: {
              breadcrumb: 'Tablets',
            },
          },
          {
            path: 'accessories',
            element: <Accessories />,
            handle: {
              breadcrumb: 'Accessories',
            },
          },
        ],
      },
    ],
  },
]);
