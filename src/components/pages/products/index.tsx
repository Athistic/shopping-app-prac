import storeData from '../../../mockData';
import ListItems from '../../organisms/product-list';

const ProductsPage = () => {
  return <ListItems data={storeData} />;
};
export default ProductsPage;
