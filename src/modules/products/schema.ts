import { z } from 'zod';

import { PRODUCT_SORT_KEYS } from '@/modules/products/constants';

export const productSchema = z.object({
  id: z.number().int(),
  category: z.enum(['phones', 'tablets', 'accessories']),
  itemId: z.string(),
  name: z.string(),
  fullPrice: z.number().int(),
  price: z.number().int(),
  screen: z.string(),
  capacity: z.string(),
  color: z.string(),
  ram: z.string(),
  year: z.number().min(1970),
  image: z.string(),
});

export const productPageSchema = z.object({
  items: z.array(productSchema),
  total: z.number().int().min(0),
  page: z.number().int().min(1),
  perPage: z.union([z.coerce.number().int().min(1).max(100), z.literal('all')]),
  totalPages: z.number().int().min(0),
});

export const productsParamsSchema = z.object({
  sort: z.enum(PRODUCT_SORT_KEYS).default('age'),
  page: z.coerce.number().int().min(1).default(1),
  perPage: z
    .union([z.coerce.number().int().min(1).max(100), z.literal('all')])
    .default('all'),
  //category: z.enum(['phones', 'tablets', 'accessories']),
  //search_str: z.string().optional(),
});

export type Product = z.infer<typeof productSchema>;
export type ProductPage = z.infer<typeof productPageSchema>;
export type ProductParams = z.infer<typeof productsParamsSchema>;
