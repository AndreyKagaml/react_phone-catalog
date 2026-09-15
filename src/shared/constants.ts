import { Breadcrumb } from '@/shared/types';

export const BREAKPOINTS = {
  tablet: 640,
  desktop: 1024,
  large: 1440,
} as const;

export const QUERY_PARAMS = {
  sort: 'sort',
  page: 'page',
  perPage: 'perPage',
} as const;

export const ROUTES = {
  HOME: '/',
  PHONES: '/phones',
  TABLETS: '/tablets',
  ACCESSORIES: '/accessories',
} as const;

export const baseBreadcrumbs: Breadcrumb[] = [
  { name: 'Phones', to: ROUTES.PHONES },
  { name: 'Tablets', to: ROUTES.TABLETS },
  { name: 'Accesories', to: ROUTES.ACCESSORIES },
];
