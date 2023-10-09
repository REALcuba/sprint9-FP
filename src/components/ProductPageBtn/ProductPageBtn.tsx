// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import ProductPage from '../../pages/ProductsPage/ProductPage'
function ProductPageBtn () {
  return (
    <div>
      <input type='button' className='ProductPageBtn Btn' value='Products' onClick={ProductPage} />
    </div>
  )
}

export default ProductPageBtn
