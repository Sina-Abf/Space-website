import myData from '../../json/data.json';
import Navbar from '../Navbar/Navbar';
import { motion } from 'framer-motion';
import SmallDesc from '../Ui/SmallDesc';
import TechnologyItems from './TechnologyItems';
import { NavLink, useParams } from 'react-router-dom';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Technology = () => {
  const { techInfo } = useParams();
  return (
    <section className="min-h-screen bg-tech-mobile bg-cover bg-center md:bg-tech-tablet lg:bg-tech-desktop">
      <Navbar />
      <motion.div
        className="flex flex-col container max-w-screen-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: '0.5' } }}
        exit={{ opacity: 0 }}
      >
        <SmallDesc page="03" info="SPACE LAUNCH 101" />

        <div className="mb-7">
          {myData.technology.map((item) => {
            if (techInfo === item.name.replaceAll(' ', '')) {
              return (
                <picture className="w-full" key={item.name}>
                  <source
                    media="(max-width: 1024px)"
                    srcSet={item.images.landscape}
                  />

                  <LazyLoadImage
                    className="w-full lg:w-1/3 lg:absolute lg:right-0 lg:top-44"
                    src={item.images.portrait}
                    alt={item.name}
                    loading="lazy"
                  />
                </picture>
              );
            }
          })}
        </div>

        <div className="lg:flex lg:mt-20">
          <ul className="flex lg:ml-24 xl:ml-16 lg:flex-col lg:gap-y-4 justify-center gap-x-4 mb-7">
            {myData.technology.map((item, index) => (
              <li key={item.name} className="font-Bellafair">
                <NavLink
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '40px',
                    height: '40px',
                    outline: '2px solid #979797',
                    borderRadius: '50%',
                    color: '#fff',
                    background: 'transparent',
                  }}
                  className={({ isActive }) =>
                    isActive ? '!bg-white !text-black !outline-none' : ''
                  }
                  to={`/technology/${item.name.replaceAll(' ', '')}`}
                >
                  {index + 1}
                </NavLink>
              </li>
            ))}
          </ul>

          {myData.technology.map((item) => {
            if (techInfo === item.name.replaceAll(' ', '')) {
              return (
                <ul key={item.name}>
                  <TechnologyItems
                    description={item.description}
                    name={item.name}
                  />
                </ul>
              );
            }
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Technology;
