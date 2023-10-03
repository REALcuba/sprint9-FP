import { useState } from 'react'
import Basketitem from './Basketitem'
import './basket.css'
import ProductList from './ProductList'

const Basket: React.FC = () => {
  const [products, setProducts] = useState(ProductList)
  return (
    <div className='basket'>
      <h1>YOUR CART</h1>

      {products.length === 0
        ? (
          <p>There are no items in your cart </p>
          )
        : (
          <p>{products.length} items</p>
          )}
      {products.map((product: any) => (
        <Basketitem
          key={product.id}
          productList={products}
          setProducts={setProducts}
          id={product.id}
          image={product.image}
          itemName={product.itemName}
          ownerName={product.ownerName}
          pickupAddress={product.pickupAddress}
        />
      ))}
    </div>
  )
}

export default Basket
