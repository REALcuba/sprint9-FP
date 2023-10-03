// import { Link } from "react-router-dom";
// import Auth from "../Auth/Auth";
// import Login from "../Login/Login";

import Basket from './Basket'

const BasketBtn: React.FC = () => {
  return (
    <div>

      <input type='button' className=' basket' value='Basket' onClick={Basket} />

    </div>
  )
}

export default BasketBtn
