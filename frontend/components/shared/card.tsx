import React from 'react';
import { Button } from '.';

type VerticalCardProps = {
    firstName: string;
    lastName: string;
    age: number;
    height: string;
    weight: string;
    imageUrl: string;
};

const VerticalCard: React.FC<VerticalCardProps> = ({
    firstName,
    lastName,
    age,
    height,
    weight,
    imageUrl,
}) => {
    return (
        <div className="w-64 bg-white shadow-lg rounded-2xl overflow-hidden">
            <div className="relative">
                <img
                    src={imageUrl}
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-1/4 object-cover"
                />
                <button className="cursor-pointer hover:scale-105 absolute top-2 right-2 bg-blue-500 text-white px-2 py-1 rounded">
                    Edit
                </button>
            </div>
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">
                    {firstName} {lastName}
                </h2>
                <div className="mb-2">
                    <span className="font-semibold">Age:</span> {age}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Height:</span> {height}
                </div>
                <div className="mb-2">
                    <span className="font-semibold">Weight:</span> {weight} lbs
                </div>
            </div>
        </div>
    );
};

export default VerticalCard;
