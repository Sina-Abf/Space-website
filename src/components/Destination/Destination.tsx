import myData from '../../json/data.json';
import Navbar from '../Navbar/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import DestinationItems from './DestinationItems';
import { motion } from 'framer-motion';

const Destination = () => {
  const { planet } = useParams();
  return (
    <motion.section className="flex flex-col items-center text-white bg-destination-mobile bg-cover bg-center md:bg-destination-tablet lg:bg-destination-desktop min-h-screen ">
      <Navbar />
      <div className="mb-8 lg:mb-1 px-8 flex items-center justify-center md:justify-start w-full gap-x-4 tracking-widest mt-10 lg:mt-2 md:text-xl lg:text-2xl lg:px-24 lg:py-6 container max-w-screen-2xl mx-auto">
        <span className="text-navigationBar font-BarlowCondensed font-bold">
          01
        </span>
        <h3 className="font-BarlowCondensed">PICK YOUR DESTINATION</h3>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: '0.5' } }}
        exit={{ opacity: 0 }}
        className="flex flex-col lg:flex-row lg:gap-x-28 lg:px-24 container max-w-screen-2xl mx-auto"
      >
        <div className="flex justify-center items-center mx-auto mb-7 w-1/2 lg:min-w-fit hover:scale-110 ease-in-out duration-500">
          {myData.destinations.map((item) => {
            if (item.name === planet) {
              return (
                <img key={item.name} src={item.images.png} alt={item.name} />
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
