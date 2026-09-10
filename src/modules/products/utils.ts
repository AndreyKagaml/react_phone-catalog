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
