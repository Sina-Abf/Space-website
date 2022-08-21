import myData from '../../json/data.json';
import moon from '../../assets/destination/image-moon.png';
import europa from '../../assets/destination/image-europa.png';
import mars from '../../assets/destination/image-mars.png';
import titan from '../../assets/destination/image-titan.png';
import Navbar from '../Navbar/Navbar';
import { NavLink, useParams } from 'react-router-dom';
import DestinationItems from './DestinationItems';

const Destination = () => {
  let { planet } = useParams();

  return (
    <section className="flex flex-col items-center px-8 text-white bg-destination-mobile bg-cover bg-center md:bg-destination-tablet lg:bg-destination-desktop min-h-screen">
      <Navbar />
      <div className="mb-8 flex items-center justify-center md:justify-start w-full gap-x-4 tracking-widest mt-10 md:text-xl lg:text-2xl lg:px-24 lg:py-6">
        <span className="text-navigationBar font-BarlowCondensed font-bold">
          01
        </span>
        <h3 className="font-BarlowCondensed">PICK YOUR DESTINATION</h3>
      </div>
      <div className="flex flex-col lg:flex-row lg:gap-x-28 lg:px-24">
        <div className="flex justify-center items-center mx-auto mb-7 w-1/2 lg:min-w-fit hover:scale-110 ease-in-out duration-500">
          {myData.destinations.map((item) => {
            if (item.name === planet) {
              return <img src={item.images.png} />;
            }
          })}
        </div>
        <div className="">
          <div className="font-BarlowCondensed lg:justify-start lg:ml-4 justify-center text-customblue flex gap-x-4 tracking-widest mb-5 md:text-lg">
            {myData.destinations.map((item) => (
              <NavLink
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
                <DestinationItems
                  key={item.name}
                  description={item.description}
                  title={item.name}
                  distance={item.distance}
                  travelTime={item.travel}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
};

export default Destination;
