import React from 'react';
import { Button } from '.';

type CardProps = {
    firstName: string;
    lastName: string;
    age: number;
    height: string;
    weight: string;
    imageUrl: string;
};

const Card: React.FC<CardProps> = ({
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
                    src='https://picsum.photos/200/200'
                    alt={`${firstName} ${lastName}`}
                    className="w-full h-1/4 object-cover"
                />
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

export default Card;
