import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import storeData from '../../../mockData';
import ListItems from '../product-list';

const Test = () => {
  const [show, setShow] = useState<boolean>(false);

  const data = storeData;
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show ? <div>Show Component</div> : <Skeleton width="300px" count={10} />}
      <ListItems data={data} />;
    </>
  );
};

export default Test;
