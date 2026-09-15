import { colornames } from 'color-name-list';

import { specialColors } from '@/modules/products/constants';

import { ProductListParams, productListParamsSchema } from './schema';

export const parseProductCatalogParamsFromSearchParams = (
  searchParams: URLSearchParams,
): ProductListParams => {
  const result = productListParamsSchema.safeParse({
    ...Object.fromEntries(searchParams),
  });

  if (!result.success) {
    // eslint-disable-next-line no-console
    console.error(result.error?.issues);

    return {
      page: 1,
      perPage: 'all',
      sort: 'age',
    };
  }

  return result.data;
};

const normalizeColorName = (name: string) =>
  name.toLowerCase().replace(/[\s-_]/g, '');

export const getColorHex = (name: string): string => {
  const normalizedName = normalizeColorName(name);

  if (specialColors[normalizedName]) {
    return specialColors[normalizedName];
  }

  const color = colornames.find(
    item => normalizeColorName(item.name) === normalizedName,
  );

  return color?.hex ?? '#FFFFFF';
};
