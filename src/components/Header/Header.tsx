
import { Link } from 'react-router-dom'
import menuImg from '../../assets/img/casa.png'
// import './header.css'
import mainLogo from '../../assets/img/main_logo.png'
// import SignUpBtn from '../SignUpBtn/SignUpBtn'

// import MenuBtn from "../MenuBtn/MenuBtn";
import LoginBtn from '../LoginBtn/LoginBtn'
// import ProfileBtn from '../ProfileBtn/ProfileBtn';
// import ProductPageBtn from '../ProductPageBtn/ProductPageBtn';

const Header: React.FC = () => {
  const isLogged = true
  return (

    <nav className='flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4'>
      <div className='w-24 m-2 p-2'>
        <Link to='/'>
          <img src={mainLogo} className='w-20' alt='logo' />
        </Link>
      </div>
      {/* <ProfileBtn /> */}
      <div>
        {!isLogged
          ? (
            <>
              <ul className='navbar-nav btn navBar_wrapper'>
                <li className='nav-item'>
                  <Link to='/' className='login'>
                    Home
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='login' to='product'>
                    Products
                  </Link>
                </li>
                <li className='nav-item '>
                  <Link to='/login' className='nav-link'>
                    <LoginBtn />
                  </Link>
                </li>

                <li className='nav-item Btn'>
                  <Link to='/register'>
                    {/* <SignUpBtn /> */}
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='login' to='/profile'>
                    Profile
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='login' to='/basket'>
                    Basket
                  </Link>
                </li>
              </ul>
            </>
            )
          : (
            <ul className='navbar-nav navBar_wrapper'>
              {/* <li className='nav-item'>
                <Link className='login' to='/about'>
                  About Us
                </Link>
              </li> */}
              <li className='nav-item'>
                <Link className='login' to='product'>
                  Products
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='login' to='/cart'>
                  Basket
                </Link>
              </li>
              <li className='nav-item '>
                <Link className='login' to='/profile'>
                  Profile
                </Link>
              </li>
            </ul>
            )}
      </div>
      {/* dropdown menu */}
      <div className='menuIcon'>
        <div className='nav-link dropdown-toggle ' data-bs-toggle='dropdown'>
          <img src={menuImg} className='w-20' alt='menu' />
        </div>

        {!isLogged
          ? (
            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                {' '}
                <Link to='/' className='dropdown-item'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/login' className='dropdown-item'>
                  Login
                </Link>
              </li>
              <li>
                <Link to='/register' className='dropdown-item'>
                  SignUp
                </Link>
              </li>
            </ul>
            )
          : (
            <ul className='dropdown-menu dropdown-menu-end'>
              <li>
                <Link className='dropdown-item' to='/profile'>
                  Profile
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='product'>
                  Products
                </Link>
              </li>
              <li>
                <Link className='dropdown-item' to='/about'>
                  About Us
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='dropdown-item' to='/cart'>
                  Basket
                </Link>
              </li>
            </ul>
            )}

      </div>
      {/* <ProductPageBtn /> */}
    </nav>

  )
}

export default Header
