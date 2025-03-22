import { Grid, Rating } from '@mui/material';
import { storeItemData } from './interfaces';
import CustomImage from '../../atoms/custom-image';
import { NavLink } from 'react-router-dom';
import './style.css';

const ListItems = ({ data }: storeItemData) => {
  return (
    <Grid container ml={5} spacing={2} flexDirection="row" gap={10}>
      {data.map((x) => (
        <Grid item key={x.id} xs={3} border={1} borderRadius={5}>
          <div className="image-container">
            <CustomImage height={150} width={150} src={x.image} />
          </div>
          <p style={{ fontWeight: 'bold' }}>{x.name}</p>
          <p>{x.description}</p>
          <p>R {x.price}</p>
          <Grid container>
            <Grid item xs={6}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            </Grid>
            <Grid item xs={6}>
              <NavLink to={`/product/${x.id}`}>Product Details</NavLink>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default ListItems;
