// props.setProducts(arrayWithoutItem)
import ProductCard from '../card/Card'
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
  productList: [
    {
      id: 1,
      image: 'https://th.bing.com/th/id/R.a1d181449e7b3aa13d5d5b1180b8d7f2?rik=mw8EHt3MR7KUlQ&riu=http%3a%2f%2fwww.cutypaste.com%2fwp-content%2fuploads%2f2017%2f09%2f09e4ddead2663443f56710438e5743a7.jpg&ehk=lvN0Wgdc684dEi2VefR%2fkjjYei1e46ezhUJjVTVuSx4%3d&risl=&pid=ImgRaw&r=0',
      itemName: 'Producto 1',
      ownerName: 'Dueño 1',
      pickupAddress: 'Dirección 1'
    },
    {
      id: 2,
      image: 'https://i.pinimg.com/originals/e6/00/d3/e600d3d1e94c0270d1745de8dc05379c.jpg',
      itemName: 'Producto 2',
      ownerName: 'Dueño 2',
      pickupAddress: 'Dirección 2'
    }
    ,
  ]
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
    <>


      <div className='basket-item bg-slate-600 w-5/6 h-32 flex container'>
        {arrayOfObjects.productList.map((product) => (
          <ProductCard img={product.image} itemName={product.itemName} ownerName={product.ownerName} pickupAddress={product.pickupAddress} />
          
        )
        )
        }


      <div className='item-action'>
        <button type='button' className='btn btn-danger' onClick={deleteItem}>
          Delete
        </button>
        <button type='button' className='btn btn-secondary'>
          Contact
        </button>
      </div>
    </div>
    </>

  )
}

export default Basketitem
