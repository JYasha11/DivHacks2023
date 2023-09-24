import React from 'react';
import { InnovationCard } from '.';

const WhatWeDo = () => {
  const innovationData = [
    {
      img: 'https://greenimaging.net/wp-content/uploads/2018/01/greenimaging-whats-going-on-with-healthcare.jpg',
      title: 'Personalized Support',
      description:
        'Personalized Support is given on this platform for all the medical care',
    },
    {
      img: 'https://www.thousandeyes.com/dA/3494d05b-2edc-4abc-8bd8-59b385e5347b',
      title: 'Access to Information',
      description:
        'Doctors will have complete access to the patient health data and will have the feature to notify the patients they thing require consultation according to their test results and latest health conditions',
    },
    {
      img: 'https://yaledailynews.com/wp-content/uploads/2023/09/IMG_1934.jpg',
      title: 'Community Building',
      description:
        'This platform will help in building a community of doctors and patients who can help each other',
    },
  ];
  return (
    <div>
      <h1 className="flex justify-center py-5 sm:py-10 font-bold sm:font-extrabold text-xl sm:text-4xl">
        Innovation behind MedScribe
      </h1>
      <div className="sm:flex justify-evenly items-center">
        {innovationData.map((data) => (
          <div className="py-5 sm:py-0" key={data.title}>
            <InnovationCard
              imgUrl={data.img}
              title={data.title}
              description={data.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeDo;
