import React from 'react'
import { Link } from 'react-router-dom'

import './footer.css'
import migracodeLogo from '../../img/migracodeLogo.png'
import Chat from '../Chat/Chat'
// component
import AboutBtn from '../About/AboutBtn'

function Footer () {
  return (
    <div className='footerDiv'>
      <Link className='about' to='/about'>
        <AboutBtn />
      </Link>

      <a
        target='_blank '
        href='https://migracode.openculturalcenter.org/'
        className='migracodeLogo migracodeDiv'
      >
        <img src={migracodeLogo} alt='' />
        {/* Migracode */}
      </a>
      <Chat />
    </div>
  )
}

export default Footer
