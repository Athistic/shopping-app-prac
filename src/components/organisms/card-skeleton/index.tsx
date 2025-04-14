import { Grid } from '@mui/material';
import Skeleton from 'react-loading-skeleton';
import './styles.css';

import { CardSkeletonProps } from './interfaces';

const CardSkeleton = ({ count }: CardSkeletonProps) => {
  return (
    <Grid container ml={5} spacing={2} gap={10}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid item key={index} xs={3} border={1} borderRadius={5}>
          <Skeleton style={{ marginLeft: 100 }} height={150} width={150} />
          <Skeleton width={100} style={{ marginBottom: 10 }} />
          <Skeleton width={300} style={{ marginBottom: 10 }} />
          <Skeleton width={100} style={{ marginBottom: 10 }} />

          <Grid container flexDirection="row" style={{ marginBottom: 10 }}>
            <Skeleton width={100} />
            <Grid item xs={5} />

            <Skeleton width={100} />
            <Grid item xs={5} />
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
};

export default CardSkeleton;
