import React from 'react';

type crewProps = {
  role: string;
  name: string;
  bio: string;
};

const CrewItems: React.FC<crewProps> = (props) => {
  return (
    <li className="text-white flex justify-center items-center flex-col gap-y-4 lg:mt-24">
      <div className="font-Bellafair text-center tracking-widest">
        <h2 className=" text-navigationBar mb-2 md:text-2xl lg:text-3xl">
          {props.role.toUpperCase()}
        </h2>
        <h1 className="text-3xl md:text-4xl lg:text-6xl">{props.name}</h1>
      </div>
      <div className="text-customblue font-Barlow pb-8">
        <p className="px-5 md:w-1/2 lg:w-2/3 mx-auto text-center  lg:text-lg">
          {props.bio}
        </p>
      </div>
    </li>
  );
};

export default CrewItems;
