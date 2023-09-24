import { InnovationCardProps } from '@/utils/props';
import React from 'react';

const InnovationCard: React.FC<InnovationCardProps> = ({
  imgUrl,
  title,
  description,
}) => {
  return (
    <div className="max-w-sm h-auto bg-white rounded-lg">
      <div className="flex justify-center rounded-full">
        <img
          src={imgUrl}
          alt="healtcare"
          height={300}
          width={300}
          className="rounded-full"
        />
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
            {title}
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default InnovationCard;
