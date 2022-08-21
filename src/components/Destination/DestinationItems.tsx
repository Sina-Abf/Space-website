import React from 'react';

type destinationProps = {
  title: string;
  description: string;
  distance: string;
  travelTime: string;
};

const DestinationItems: React.FC<destinationProps> = (props) => {
  return (
    <section className="flex flex-col pb-8">
      <div className="flex flex-col items-center lg:items-start text-center lg:text-start p-4 mb-7">
        <h1 className="text-6xl font-Bellafair mb-2 lg:mb-4 lg:text-8xl">
          {props.title.toUpperCase()}
        </h1>
        <p className="font-Barlow text-customblue leading-relaxed md:w-2/3 pb-8 border-b border-b-navigationBar/40">
          {props.description}
        </p>
      </div>
      <div className="flex flex-col lg:justify-start md:flex-row md:justify-center md:gap-x-24 items-center gap-y-8 lg:ml-4">
        <div className="space-y-2 text-center">
          <span className="font-BarlowCondensed text-sm md:text-base tracking-widest text-customblue">
            AVG. DISTANCE
          </span>
          <h4 className="font-Bellafair text-3xl">
            {props.distance.toUpperCase()}
          </h4>
        </div>
        <div className="space-y-2 text-center">
          <span className="font-BarlowCondensed text-sm md:text-base tracking-widest text-customblue">
            EST. TRAVEL TIME
          </span>
          <h4 className="font-Bellafair text-3xl">
            {props.travelTime.toUpperCase()}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default DestinationItems;
