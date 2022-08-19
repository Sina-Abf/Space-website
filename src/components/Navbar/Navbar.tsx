import { useState } from 'react';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="flex items-center justify-between">
      <div className="p-4 px-6 lg:p-8 ">
        <img src={logo} />
      </div>
      <div className="p-4 px-6">
        <button
          onClick={() => setIsClicked((prevState) => !prevState)}
          className="md:hidden"
        >
          <img src={hamburger} />
        </button>
      </div>
      <div className="hidden mt-1 lg:block w-5/12 h-0.5 -mr-12 z-20 bg-navigationBar/30" />
      <ul className="backdrop-blur-md lg:mt-3 lg:w-1/2 lg:justify-center hidden gap-x-9 text-white rounded bg-navigationBar/10 px-7 font-BarlowCondensed md:flex lg:bg-navigationBar/10">
        <li className="border-b border-b-white py-7">00 HOME</li>
        <li className="py-7">01 DESTINATION</li>
        <li className="py-7">02 CREW</li>
        <li className="py-7">03 TECHNLOGY</li>
      </ul>
    </nav>
  );
};

export default Navbar;
