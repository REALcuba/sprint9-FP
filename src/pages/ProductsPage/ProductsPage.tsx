import SearchSection from '../../components/SearchSection/SearchSection'
import Header from '../../components/Header/Header'
import ProductCard from '../../components/productCard/ProductCard'
import Grid from '@mui/material/Grid'
import Filter from '../../components/filter/Filter'
import { FilterProps, ProductRow } from '../../types/types'
import useAuthStore from '../../store/UseStore'
type ProductPageProps = {
  noImg: string
  // categories: string
  // status: string
  changeFilter: (callback: (prevFilter: FilterProps) => FilterProps) => void
  filteredProducts: ProductRow[]
}
const ProductPage: React.FC<ProductPageProps> = ({ noImg, changeFilter, filteredProducts }) => {
  const { isLoggedIn, data } = useAuthStore()
  return (
    <>
      <Header />
        <SearchSection />
      {isLoggedIn ? <p>Welcome, {data?.user?.email}</p> : null}
      <Filter category={''} status={''} filteredProducts={filteredProducts} changeFilter={changeFilter} />
      {filteredProducts.length === 0 && (
        <p>No se encontraron productos que coincidan con los filtros.</p>
      )}
      <section className='flex justify-end p-2'>
        <Grid container spacing={1} columns={4} maxWidth={"80%"} alignContent={'end'} margin={2}>
          {filteredProducts.map((product) => (
            <Grid key={product.id} className='p-2 '>

              <ProductCard 
              key={product.id} 
                img={product.images ? product.images : noImg}
                itemName={product.user_name}
              ownerName={product.ownerName} 
              pickupAddress={product.description} />
            </Grid>

          ))}
        </Grid >
      </section>

    </>
  )
}

export default ProductPage
