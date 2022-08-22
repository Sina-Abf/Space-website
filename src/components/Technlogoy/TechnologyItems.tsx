import React from 'react';

type techProps = {
  img: string;
  description: string;
  name: string;
};

const TechnologyItems: React.FC<techProps> = (props) => {
  return (
    <li className="lg:ml-20 xl:ml-30 flex text-white flex-col justify-center items-center text-center lg:text-start lg:justify-start lg:items-start">
      <div className="tracking-widest mb-4">
        <h3 className="text-customblue text-sm mb-2 lg:text-base">
          THE TERMINOLOGY…
        </h3>
        <h1 className="font-Bellafair text-2xl md:text-4xl lg:text-6xl">
          {props.name.toUpperCase()}
        </h1>
      </div>
      <div className="w-4/5 lg:w-1/3 font-Barlow text-customblue pb-8">
        <p className="lg:text-lg">{props.description}</p>
      </div>
    </li>
  );
};

export default TechnologyItems;
