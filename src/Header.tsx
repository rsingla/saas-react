import React from 'react'

import xoraLogo from '/images/xora.svg'
import { Link } from 'react-scroll'


const NavLink = ({title}: {title: string}) => (
  <Link to="/" smooth={true} duration={500}>
    {title}
  </Link>
)

const Header = () => {
  return (
    <header className='fixed top-0 left-0 w-full py-10'> 
    <div className='flex container h-14 items-center max-lg:px-5'>
        <a className='lg:hidden flex-1 cursor-pointer z-2'>
          <img src={xoraLogo} width={194} height={55} alt="Xora logo" />
        </a>
      </div>
      <div className='w-full border-2  border-amber-400'>
        <nav>
          <ul className='flex max-lg:block max-lg:px-12'>
            <li className='nav-li'>
              <NavLink title="features"/>
            </li>
            <li className='nav-li'>
              <NavLink title="pricing"/>
            </li>
            <li className='nav-li'>
              <NavLink title="resources"/>
            </li>
            <li className='nav-li'>
              <NavLink title="company"/>
            </li>
          </ul>
        </nav>
      </div>
      </header>
  )
}

export default Header