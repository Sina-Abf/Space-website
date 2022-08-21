import { motion } from 'framer-motion';
import Navbar from '../Navbar/Navbar';
import { useParams, NavLink } from 'react-router-dom';
import myData from '../../json/data.json';
import CrewItems from './CrewItems';

const Crew = () => {
  const { crew_people } = useParams();
  return (
    <section className="min-h-screen bg-crew-mobile bg-cover bg-center md:bg-crew-tablet lg:bg-crew-desktop">
      <Navbar />
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: '100%' }}
        exit={{ x: window.innerWidth }}
      >
        <div className="text-white mb-8 lg:mb-0 flex items-center justify-center md:justify-start w-full gap-x-4 tracking-widest mt-10 lg:mt-2 md:text-xl lg:text-2xl lg:px-24 md:px-16">
          <span className="text-navigationBar font-BarlowCondensed font-bold">
            02
          </span>
          <h3 className="font-BarlowCondensed">MEET YOUR CREW</h3>
        </div>
        <div className="px-12 flex flex-col md:flex-col-reverse lg:flex-row-reverse">
          <div className="mb-8 md:mb-0 w-full pb-1 lg:pb-0 mx-auto md:border-0 border-b border-b-navigationBar">
            {myData.crew.map((item) => {
              if (crew_people === item.name.replaceAll(' ', '')) {
                return (
                  <img
                    className="mx-auto"
                    key={item.name}
                    src={item.images.png}
                  />
                );
              }
            })}
          </div>
          <div className="flex items-center justify-center gap-x-4 mb-8 lg:justify-center lg:items-end lg:mr-12">
            {myData.crew.map((item) => {
              return (
                <NavLink
                  key={item.name}
                  className={(navData) => (navData.isActive ? '!bg-white' : '')}
                  style={{
                    display: 'block',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    background: '#979797',
                  }}
                  to={`/crew/${item.name.replaceAll(' ', '')}`}
                />
              );
            })}
          </div>
          {myData.crew.map((item) => {
            if (crew_people === item.name.replaceAll(' ', '')) {
              return (
                <ul>
                  <CrewItems
                    key={item.name.replaceAll(' ', '')}
                    bio={item.bio}
                    name={item.name}
                    role={item.role}
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

export default Crew;
