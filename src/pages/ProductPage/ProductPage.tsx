import './productPage.css'

import Slider from '../../components/ProductSlider/Slider/Slider'
import SearchSection from '../../components/SearchSection/SearchSection'
import Header from '../../components/Header/Header'

const ProductPage: React.FC = () => {
  return (
    <>
      <Header />
      <section className=''>
        <SearchSection />
        <h2 className='display-1'>Products Page</h2>
        <Slider />
      </section>

    </>
  )
}

export default ProductPage
