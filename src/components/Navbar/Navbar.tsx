import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/shared/logo.svg';
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';

const Navbar = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="flex justify-between container max-w-screen-2xl mx-auto relative z-50">
      <div className="p-4 px-6 lg:p-8 ">
        <Link to="/home">
          <img src={logo} />
        </Link>
      </div>
      <div className="p-4 px-6 mt-3">
        {!isClicked && (
          <button onClick={() => setIsClicked(true)} className="md:hidden">
            <img src={hamburger} />
          </button>
        )}
      </div>
      <div className="hidden mt-14 lg:block w-5/12 h-0.5 -mr-12 z-20 bg-navigationBar/30" />
      <ul className="backdrop-blur-md lg:text-lg h-full lg:mt-3 lg:w-1/2 lg:justify-center hidden gap-x-9 text-white rounded bg-navigationBar/10 px-7 font-BarlowCondensed md:flex lg:bg-navigationBar/10">
        <li className="py-7">
          <NavLink
            className={(navData) =>
              navData.isActive
                ? 'border-b-2 border-b-white hover:border-b-navigationBar  transition-colors duration-300'
                : ''
            }
            style={{ display: 'flex', gap: '0.25rem' }}
            to="/home"
          >
            <span className="font-bold">00</span>
            <span>HOME</span>
          </NavLink>
        </li>
        <li className="flex gap-x-1 py-7">
          <NavLink
            className={(navData) =>
              navData.isActive ? 'border-b-2 border-b-white' : ''
            }
            style={{ display: 'flex', gap: '0.25rem' }}
            to="/destination"
          >
            <span className="font-bold">01</span>
            <span>DESTINATION</span>
          </NavLink>
        </li>
        <li className="flex gap-x-1 py-7">
          <NavLink
            className={(navData) =>
              navData.isActive ? 'border-b-2 border-b-white' : ''
            }
            style={{ display: 'flex', gap: '0.25rem' }}
            to="/crew"
          >
            <span className="font-bold">02</span>
            <span>CREW</span>
          </NavLink>
        </li>
        <li className="flex gap-x-1 py-7">
          <NavLink
            className={(navData) =>
              navData.isActive ? 'border-b-2 border-b-white' : ''
            }
            style={{ display: 'flex', gap: '0.25rem' }}
            to="/technology"
          >
            <span className="font-bold">03</span>
            <span>TECHNOLOGY</span>
          </NavLink>
        </li>
      </ul>

      {isClicked && (
        <ul className="absolute right-0 backdrop-blur-md w-1/2 flex flex-col gap-y-8 min-h-screen md:hidden text-white rounded bg-navigationBar/10 px-7 font-BarlowCondensed">
          <button
            onClick={() => setIsClicked(false)}
            className="w-full flex justify-end mt-4 mb-16"
          >
            <img src={close} />
          </button>
          <li className="flex gap-x-1e">
            <NavLink
              className={(navData) =>
                navData.isActive ? 'border-r border-r-white w-full' : ''
              }
              style={{ display: 'flex', gap: '0.25rem' }}
              to="/home"
            >
              <span className="font-bold">00</span>
              <span>HOME</span>
            </NavLink>
          </li>
          <li className="flex gap-x-1">
            <NavLink
              className={(navData) =>
                navData.isActive ? 'border-r border-r-white w-full' : ''
              }
              style={{ display: 'flex', gap: '0.25rem' }}
              to="/destination"
            >
              <span className="font-bold">01</span>
              <span>DESTINATION</span>
            </NavLink>
          </li>
          <li className="flex gap-x-1">
            <NavLink
              className={(navData) =>
                navData.isActive ? 'border-r-2 border-r-white w-full' : ''
              }
              style={{ display: 'flex', gap: '0.25rem' }}
              to="/crew"
            >
              <span className="font-bold">02</span>
              <span>CREW</span>
            </NavLink>
          </li>
          <li className="flex gap-x-1">
            <NavLink
              className={(navData) =>
                navData.isActive ? 'border-b-2 border-b-white' : ''
              }
              style={{ display: 'flex', gap: '0.25rem' }}
              to="/technology"
            >
              <span className="font-bold">03</span>
              <span>TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
