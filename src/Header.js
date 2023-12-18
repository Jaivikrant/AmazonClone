import React from 'react';
import {Link, } from 'react-router-dom';
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useStateValue } from './StateProvider';




function Header (){
  const [{basket}] = useStateValue();
  return (
    <nav className='header'>
    <Link to="/"> 

    <img
        className='header__logo'
        src="https://companieslogo.com/img/orig/AMZN_BIG.D-8fb0be81.png?t=1632523695"
        alt='Amazon Logo'
    />
    </Link>
    <div className="header__Search">
    <input type="text" className='header__SearchInput'/>
    <FaSearch className="header__SearchIcon"/>
    </div>

    {/* Header Navigation */}

<div className="header__nav">

{/* first link */}
    <Link to="/" className='header__link'>
    <div className="header__option">
      <span className='header__option__line1'>Hello Ajay</span>
      <span className='header__option__line2'>Sign In</span>
    </div>
    </Link>

    {/* Secondlink */}

    <Link to="/" className='header__link'>
    <div className="header__option">
      <span className='header__option__line1'>Returns</span>
      <span className='header__option__line2'>Orders</span>
    </div>
    </Link>

    {/* Third Link */}

    <Link to="/" className='header__link'>
    <div className="header__option">
      <span className='header__option__line1'>Your</span>
      <span className='header__option__line2'>Prime</span>
    </div>
    </Link>

    {/* Fourth link */}

    <Link to="/Checkout" className='header__link'>
    <div className="header__optionBasket">
    {/* Shopping basket Icon */}
    <MdOutlineShoppingCart className='basket__Size'/>
    {/* No of Items in the basket */}
    <span className='header__BasketCount'>{basket?.length}</span>


      
    </div>
    </Link>

</div>
    </nav>
  )
}

export default Header;