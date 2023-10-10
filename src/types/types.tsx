export interface buttonProps {
  direction: string
  moveSlide: string
}
export type productsListProps = {
  id: number,
  image: string,
  itemName: string,
  ownerName: string,
  pickupAddress: string,
  category: string,
  status: string
}[]

export type HomeProps = {
  changeFilter: (callback: (prevFilter: FilterProps) => FilterProps) => void;

  filteredProducts: productsListProps;
};
export interface FilterProps extends HomeProps {
  categories: string,
  status: string,
}
