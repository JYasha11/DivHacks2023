import Image from 'next/image';
import React from 'react';
import Doctor from '@/utils/images/doctor.png';
import Typewriter from 'typewriter-effect';
import { Button } from '../shared';
import Link from 'next/link';

const Hero = () => {
  return (
    <div>
      <div
        className="bg-blue-300 min-h-1/2 flex items-center
       justify-between">
        <div className="pl-15">
          <h1 className="font-bold text-5xl text-center py-10 px-10">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('Welcome to MedScribe!')
                  .callFunction(() => {
                    console.log('String typed out!');
                  })
                  .start();
              }}
            />
          </h1>
          <h2 className="font-medium text-3xl text-center px-20">
            One Stop Solution for a Doctor-Patient Communication
          </h2>
          <div className="flex justify-center items-center py-5">
            <div className="px-2">
              <Button type="secondary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
            <div className="px-2">
              <Button type="secondary">
                <Link href="/dashboard">
                  <span>Go to Patient Dashboard</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <figure>
          <Image
            src={Doctor}
            width={700}
            height={1200}
            alt="a doctor smiling and showing support to the patients"
          />
        </figure>
      </div>
    </div>
  );
};

export default Hero;
