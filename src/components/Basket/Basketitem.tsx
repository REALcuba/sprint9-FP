// props.setProducts(arrayWithoutItem)
import Grid from '@mui/material/Grid'
import ProductCard from '../productCard/ProductCard'
import ProductList from './ProductList'
type Product = {
  id: number;
  image: string;
  itemName: string;
  ownerName: string;
  pickupAddress: string;
}
type BasketitemProps = {
  deleteItem: () => void;
  setProducts: (products: Product[]) => void;
  productList: Product[];

}
// Creación de un array de objetos con el tipo BasketitemProps
// eslint-disable-next-line react-refresh/only-export-components
export const arrayOfObjects: BasketitemProps =
{
  deleteItem: () => { /* Función deleteItem */ },
  setProducts: () => { /* Función setProducts */ },
  productList: ProductList

}// Puedes agregar más objetos BasketitemProps aquí


const Basketitem: React.FC<BasketitemProps> = () => {
  const deleteItem = () => {
    const arrayWithoutItem = arrayOfObjects.productList.filter(
      (itemName) => itemName.id !== arrayOfObjects.productList[0].id
    )
    arrayOfObjects.setProducts(arrayWithoutItem)
  }
  console.log(arrayOfObjects.productList[0].itemName)

  return (
    // <section className=''>
    //   <div className='basket-item grid-cols-4 gap-4'>
    //     {arrayOfObjects.productList.map((product) => (
    //       <div key={product.id} className=''>
    //         <ProductCard key={product.id} img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
    //         <div className='item-action'>
    //     <button type='button' className='btn btn-danger' onClick={deleteItem}>
    //       Delete
    //     </button>
    //     <button type='button' className='btn btn-secondary'>
    //       Contact
    //     </button>
    //         </div>
    //       </div>

    //     )
    //     )
    //     }
    //   </div>
    // </section >
    <>
      <div className='h2 border rounded-full w-4/6'>filter</div>
      <section className='flex justify-end p-2 gap-2 border'>
        <Grid container spacing={1} columns={4} maxWidth={"90%"} minWidth={'30%'} alignContent={'end'} margin={2}>
        {arrayOfObjects.productList.map((product) => (
          <Grid xs={4} md={2} lg={1} key={product.id} className='p-2 '>

            <ProductCard key={product.id} img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
            <div className='item-action'>
              <button type='button' className='btn btn-danger' onClick={deleteItem}>
                Delete
              </button>
              <button type='button' className='btn btn-secondary'>
                Contact
              </button>
            </div>
          </Grid>

        ))}
        </Grid >
      </section >
    </>
  )
}

export default Basketitem
