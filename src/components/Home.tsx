import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar/Navbar';

const Home = () => {
  return (
    <div className="min-h-screen bg-main-mobile bg-cover bg-center md:bg-main-tablet lg:bg-main-desktop">
      <Navbar />
      <section className="pb-4 mt-12 lg:mt-32 px-8 flex text-white flex-col items-center justify-center gap-y-4 lg:flex-row container max-w-screen-2xl mx-auto">
        <div className="lg:ml-24 text-center flex flex-col lg:items-start flex-1">
          <span className="text-customblue lg:ml-1 lg:text-2xl tracking-widest font-BarlowCondensed">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <h1 className="font-Bellafair text-8xl lg:mb-7">SPACE</h1>
          <div className="flex justify-center lg:justify-start mx-auto lg:items-start">
            <p className="lg:text-start md:w-1/2 font-Barlow text-customblue mb-16 break-words">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
        </div>
        <Link className="font-Bellafair text-xl" to="/destination">
          <span className="flex justify-center items-center text-black bg-white rounded-full w-36 h-36 md:w-44 md:h-44 lg:w-48 lg:h-48 lg:mr-36 hover:ring-8 hover:ring-navigationBar/40 hover:p-8">
            EXPLORE
          </span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
