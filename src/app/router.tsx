import { createBrowserRouter } from 'react-router-dom';

import { Home } from '@/modules/home';

import { MainLayout } from '../layouts/MainLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);
