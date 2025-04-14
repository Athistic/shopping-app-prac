export interface PaginatedResponse<T> {
  totalItems: number;
  totalPages: number;
  pageSize: number;
  currentPage: number;
  data: T[];
}
