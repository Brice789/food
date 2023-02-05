import React from 'react'
import Logo from "./img/logo.png"
import {MdShoppingBasket } from 'react-icons/md'

function Header() {
  return (
    <header className='fixeed z-50 w-Screen bg-slate-300 p-6 px-16'>
        {/* { desktop & tablet } */}
        <div className="hidden md:flex w-full h-full">
            <div className="flex items-center gap-2">
                <img src = {Logo} className="w-10 object-cover" alt = "logo"/>
                <p className="text-headingColor text-xl font-blod"> City </p>
            </div>

            <ul className="flex items-center gap-10 ml-auto">
              <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all easy-in-out cursor-pointer '>
                    Home
                </li>    
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all easy-in-out cursor-pointer '>
                    Home
                </li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all easy-in-out cursor-pointer '>
                    Home
                </li>
                <li className='text-base text-textColor hover:text-headingColor duration-100 transition-all easy-in-out cursor-pointer '>
                    Home
                </li>
            </ul>

            {/* <div className="relativeative">
             <MdShoppingBasket/>
            </div> */}
        </div>


        <div className="flex md:hidden w-full h-fill"></div>
        
    </header>
  );
};

export default Header 