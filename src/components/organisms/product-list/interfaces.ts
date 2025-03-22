export interface storeDataProps {
  id: number;
  description: string;
  price: number;
  image: string;
  name: string;
}

export interface storeItemData {
  data: storeDataProps[];
}
