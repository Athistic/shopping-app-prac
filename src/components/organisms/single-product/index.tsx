import { NavLink, useParams } from 'react-router-dom';
import storeData from '../../../mockData';
import { Button, Grid } from '@mui/material';
import CustomImage from '../../atoms/custom-image';
import Paths from '../../../shared/paths';

const SingleProduct = () => {
  const { id } = useParams();
  const selectedData = id
    ? storeData.find((x) => x.id === parseInt(id))
    : undefined;

  return (
    <Grid container mt={10} flexDirection="row" height={500}>
      <Grid item xs={6}>
        <CustomImage width={500} height={500} src={selectedData?.image} />
      </Grid>

      <Grid item xs={4} height={200} border={1} pl={2}>
        <p>{selectedData?.description}</p>
        <p>R{selectedData?.price}</p>
        <Button variant="contained">Add to Cart</Button>
      </Grid>
      <NavLink to={Paths.products}>BACK</NavLink>
    </Grid>
  );
};
export default SingleProduct;
