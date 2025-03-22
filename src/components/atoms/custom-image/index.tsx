import { CustomImageProps } from './interfaces';

const CustomImage = (props: CustomImageProps) => {
  const { src, alt, width, height } = props;
  return <img src={src} width={width} height={height} alt={alt} />;
};

export default CustomImage;
