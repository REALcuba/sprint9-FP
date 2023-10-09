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
  changeFilter: (filter: { categories: string; status: string }) => void;
  filteredProducts: productsListProps;
};