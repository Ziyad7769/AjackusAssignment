import React from 'react';
import logo from "../assets/ajackus-logo.svg";

const Header = () => {
  return (
    <div className='flex justify-between m-4'>
        <img src={logo} alt="logo" />
        <p>Ziyad Khan</p>
    </div>
  )
}
 
export default Header