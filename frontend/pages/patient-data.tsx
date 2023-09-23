import React from 'react';

const PatientData = () => {
  return (
    <div className="px-10">
      <h1 className="py-5 font-bold text-3xl flex items-center justify-center">
        Patient Details
      </h1>
      <section>
        <div>
          <h1 className="font-medium text-2xl py-4">Personal Details</h1>
          <div>
            <div>
              <span className="font-bld text-xl">Name:</span> Shivam Shekhar
            </div>
            <div>
              <span className="font-bld text-xl">Age:</span> 22
            </div>
            <div>
              <span className="font-bld text-xl">Weight:</span> 130 lbs
            </div>
            <div>
              <span className="font-bld text-xl">Height: </span>5ft
            </div>
            <div>
              <span className="font-bld text-xl">Email: </span>
              shvam0000@gmail.com
            </div>
            <div>
              <span className="font-bld text-xl">Phone number:</span> (999)
              999-9999
            </div>
          </div>
        </div>
      </section>
      <section>
        <h1 className="font-medium text-2xl py-4">Medical Details</h1>
        <div>
          <span className="font-bld text-xl">Symptoms:</span> Cough, Fever,
          Abdominal pain
        </div>
        <div>
          <span className="font-bld text-xl">Medication:</span> Advil,
          Paracetamol
        </div>
        <div>
          <span className="font-bld text-xl">Conditions:</span>
          <ul>
            <li className="font-bld text-xl">TB: </li>recovered
            <li className="font-bld text-xl">Backpain: </li>unrecovered
          </ul>
        </div>
      </section>
    </div>
  );
};

export default PatientData;
