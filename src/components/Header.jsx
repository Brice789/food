import React from 'react'
import Logo from "./img/logo.png"
import {MdShoppingBasket } from 'react-icons/md'
import { useHover } from 'react-laag';

function Header() {
  return (
    <header className='fixeed z-50 w-Screen bg-slate-300 p-6 px-16'>
        {/* { desktop & tablet } */}
        <div className="hidden md:flex w-full h-full">
            <div className="flex items-center gap-2 ">
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

            <div className="relativeative">
             <MdShoppingBasket className='text-textColor text-2xl ml-8 top-0.8 cursoir-pointer'/>
             <div className='w-5 h-5 rounder-full bg-cartNumbg flex items-center justify-center'></div>
             <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
             <p className='text-xs text-white font-semibold'>2</p>
             </div>
            </div>
        </div>


        <div className="flex md:hidden w-full h-fill"></div>
        
    </header>
  );
};

export default Header 