import { useState } from 'react';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="flex justify-between">
      <div className="p-4 px-6 lg:p-8 ">
        <img src={logo} />
      </div>
      <div className="p-4 px-6">
        {!isClicked && (
          <button onClick={() => setIsClicked(true)} className="md:hidden">
            <img src={hamburger} />
          </button>
        )}
      </div>
      <div className="hidden mt-14 lg:block w-5/12 h-0.5 -mr-12 z-20 bg-navigationBar/30" />
      <ul className="backdrop-blur-md lg:mt-3 lg:w-1/2 lg:justify-center hidden gap-x-9 text-white rounded bg-navigationBar/10 px-7 font-BarlowCondensed md:flex lg:bg-navigationBar/10">
        <li className="flex gap-x-1 border-b border-b-white py-7">
          <span className="font-bold">00</span>
          <span>HOME</span>
        </li>
        <li className="flex gap-x-1 py-7">
          <span className="font-bold">01</span>
          <span>DESTINATION</span>
        </li>
        <li className="flex gap-x-1 py-7">
          <span className="font-bold">02</span>
          <span>CREW</span>
        </li>
        <li className="flex gap-x-1 py-7">
          <span className="font-bold">03</span>
          <span>TECHNOLOGY</span>
        </li>
      </ul>

      {isClicked && (
        <ul className="backdrop-blur-md w-1/2 flex flex-col gap-y-8 min-h-screen md:hidden text-white rounded bg-navigationBar/10 px-7 font-BarlowCondensed">
          <button
            onClick={() => setIsClicked(false)}
            className="w-full flex justify-end mt-2 mb-16"
          >
            <img src={close} />
          </button>
          <li className="flex gap-x-1 border-r border-r-white">
            <span className="font-bold">00</span>
            <span>HOME</span>
          </li>
          <li className="flex gap-x-1">
            <span className="font-bold">01</span>
            <span>DESTINATION</span>
          </li>
          <li className="flex gap-x-1">
            <span className="font-bold">02</span>
            <span>CREW</span>
          </li>
          <li className="flex gap-x-1">
            <span className="font-bold">03</span>
            <span>TECHNOLOGY</span>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
