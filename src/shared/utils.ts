import clsx, { type ClassValue } from 'clsx';

import { PaginatedResponse } from '@/shared/types';

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export const paginate = <T>(
  itemsAll: T[],
  page: number,
  size: number | 'all',
): PaginatedResponse<T> => {
  const total = itemsAll.length;
  const sizePerPage = size === 'all' ? total : size;

  const totalPages = Math.ceil(total / sizePerPage);
  const start = (page - 1) * sizePerPage;

  return {
    items: itemsAll.slice(start, start + sizePerPage),
    total,
    // page,
    //perPage,
    totalPages,
  };
};
