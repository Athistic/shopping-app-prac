import { useEffect, useState } from 'react';
import ListItems from '../../organisms/product-list';
import CardSkeleton from '../../organisms/card-skeleton';
import { PaginatedResponse } from '../../../api/model';
import { Product } from '../../../api/model/product';

const ProductsPage = () => {
  const [data, setData] = useState<PaginatedResponse<Product>>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch('https://localhost:7055/api/product');
        const data = await res.json();

        setData(data);
        console.log(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          console.error('Error fetching data:', err.message);
        } else {
          console.error('Unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      {isLoading ? (
        <CardSkeleton count={6} />
      ) : (
        data && <ListItems data={data} />
      )}
    </>
  );
};
export default ProductsPage;
