import React from 'react';

type SmallDescProps = {
  page: string;
  info: string;
};

const SmallDesc: React.FC<SmallDescProps> = (props) => {
  return (
    <div className="mb-8 lg:mb-1 px-8 flex items-center justify-center md:justify-start w-full gap-x-4 tracking-widest mt-10 lg:mt-2 md:text-xl lg:text-2xl lg:px-24 lg:py-6 container max-w-screen-2xl mx-auto text-white">
      <span className="text-navigationBar font-BarlowCondensed font-bold">
        {props.page}
      </span>
      <h3 className="font-BarlowCondensed">{props.info}</h3>
    </div>
  );
};

export default SmallDesc;
