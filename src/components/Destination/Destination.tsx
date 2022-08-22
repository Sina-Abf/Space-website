import myData from '../../json/data.json';
import Navbar from '../Navbar/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import DestinationItems from './DestinationItems';
import { motion } from 'framer-motion';
import SmallDesc from '../Ui/SmallDesc';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Destination = () => {
  const { planet } = useParams();
  return (
    <motion.section className="flex flex-col items-center text-white bg-destination-mobile bg-cover bg-center md:bg-destination-tablet lg:bg-destination-desktop min-h-screen ">
      <Navbar />
      <SmallDesc page="01" info="PICK YOUR DESTINATION" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: '0.5' } }}
        exit={{ opacity: 0 }}
        className="flex flex-col lg:flex-row lg:gap-x-28 lg:px-24 container max-w-screen-2xl mx-auto"
      >
        <div className="flex justify-center items-center mx-auto mb-7 w-1/2 lg:min-w-fit hover:scale-110 ease-in-out duration-500 animation-spin">
          {myData.destinations.map((item) => {
            if (item.name === planet) {
              return (
                <LazyLoadImage
                  key={item.name}
                  src={item.images.png}
                  alt={item.name}
                  effect="blur"
                  loading="lazy"
                />
              );
            }
          })}
        </div>
        <div>
          <div className="font-BarlowCondensed lg:justify-start lg:ml-4 justify-center text-customblue flex gap-x-4 tracking-widest mb-5 md:text-lg">
            {myData.destinations.map((item) => (
              <NavLink
                key={item.name}
                className={(navData) =>
                  navData.isActive ? 'border-b-2 border-b-white text-white' : ''
                }
                style={{ padding: '5px 0' }}
                to={`/destination/${item.name}`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          {myData.destinations.map((item) => {
            if (item.name === planet) {
              return (
                <ul key={item.name}>
                  <DestinationItems
                    description={item.description}
                    title={item.name}
                    distance={item.distance}
                    travelTime={item.travel}
                  />
                </ul>
              );
            }
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Destination;
