import React from 'react'

import xoraLogo from '/images/xora.svg'
import { Link as LinkScroll } from "react-scroll";


const NavLink = ({title}: {title: string}) => (
  <LinkScroll to={title} smooth={true} duration={500}>
    {title}
  </LinkScroll>
)

const Header = () => {
  return (
    <header className='fixed top-0 left-0 z-50 w-full py-10'> 
    <div className='flex container h-14 items-center max-lg:px-5'>
        <a className='lg:hidden flex-1 cursor-pointer z-2'>
          <img src={xoraLogo} width={110} height={55} alt="Xora logo" />
        </a>
      </div>
      <div className='w-full max-lg:hidden border-2  border-amber-400'>
        <nav>
          <ul className='flex  max-lg:px-12'>
            <li className='nav-li'>
              <NavLink title="features"/>
              <div className='dot'/>
              <NavLink title="pricing"/>
            </li>
            <li className='nav-logo'>
              <img src={xoraLogo} width={100} height={55} alt="Xora logo" />
            </li>
            <li className='nav-li'>
              <NavLink title="resources"/>
              <div className='dot'/>
              <NavLink title="company"/>
            </li>
          </ul>
        </nav>
      </div>
      </header>
  )
}

export default Header