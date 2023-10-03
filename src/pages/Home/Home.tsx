
// components
// import Header from './components/Header/Header.jsx'
// import ProductSlider from "./components/ProductSlider/ProductSlider";
import CategorieSlider from '../../components/CathegoriesSlider/CategoriesSlider'
import HeaderTest from '../../components/Header/HeaderTest'
import SearchSection from '../../components/SearchSection/SearchSection'

// import MenuBtn from "../components/MenuBtn/MenuBtn";
const Home: React.FC = () => {
  return (
    <div className=''>
      <HeaderTest />
      <SearchSection />
      <CategorieSlider />
    </div>
  )
}

export default Home
