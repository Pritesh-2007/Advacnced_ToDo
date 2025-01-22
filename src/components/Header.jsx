import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { LuAtom } from "react-icons/lu";
import { FiSearch } from "react-icons/fi";
import { GrAppsRounded } from "react-icons/gr";
import { RiMoonClearLine } from "react-icons/ri";
function Header({toglesidebar, isbar}) {
  function handletoggle()
  {
    toglesidebar(!isbar)
  }
  return (
    <header className="header flex text-xl h-12 w-full m-0 justify-between px-5 items-center cursor-pointer">
        <div className="col1i flex items-center gap-5">
          <div className="hamburger" onClick={()=>{handletoggle()}} ><RxHamburgerMenu/></div>
          <div className='flex items-center gap-2 text-green-600 font-bold'>
          <div className="logo"><LuAtom/></div>
          <div>DoIt</div>
          </div>

        </div>
        <div className="col2i flex gap-4">
          <FiSearch/>
          <GrAppsRounded/>
          <RiMoonClearLine/>
          </div>     
    </header>
  )
}

export default Header