import React from 'react';
import { useRouter } from 'next/router';

const PatientData = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="bg-stone-100 mx-5 my-5 py-8 px-8 rounded-2xl">
      <div className="flex">
        <div className="w-1/3 pr-4">
          <div className="flex flex-col items-center justify-center">
            <img src="https://picsum.photos/300" alt="Patient" />
          </div>
          <div className="pl-20">
            <hr className="mt-4 border-t border-gray-300" />

            <h1 className="font-light text-xl py-2">Medication History</h1>
            <div className="pl-4 flex items-start">
              <span className="font-medium text-l w-24">Current:</span>
              <span className="font-extralight text-l">Advil, Tylenol</span>
            </div>
            <div className="pl-4 flex items-start">
              <span className="font-medium text-l w-24">Past:</span>
              <span className="font-extralight text-l">Motrin</span>
            </div>
            <hr className="mt-4 border-t border-gray-300" />
            <h1 className="font-light text-xl py-2">Immunization History</h1>
            <div className="pl-4 flex items-start">
              <span className="font-medium text-l w-24">COVID-19</span>
              <span className="font-extralight text-l">06/20/2020</span>
            </div>
            <div className="pl-4 flex items-start">
              <span className="font-medium text-l w-24">Measles</span>
              <span className="font-extralight text-l">02/19/2002</span>
            </div>
            <hr className="mt-4 border-t border-gray-300" />
            <h1 className="font-light text-xl py-2">Emergency Contact</h1>
            <div className="pl-4 flex items-start">
              <span className="font-medium text-l w-24">Father</span>
              <span className="font-extralight text-l">(111)-111-1111</span>
            </div>
          </div>
        </div>

        <div className="w-2/3">
          <section>
            <div className="flex justify-between items-center">
              <h1 className="font-medium text-3xl flex items-left justify-left">Shivam Shekhar</h1>
              <p className="font-light text-m flex">Patient for : <span> 2 years</span></p>
              <button className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded-lg">
                Contact Patient
              </button>
            </div>

            <hr className="border-t border-gray-300" />
            <h1 className="font-light text-xl py-2">Personal Details</h1>
            <div className="px-4">
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Age:</span>
                <span className="font-extralight text-l">22</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Gender:</span>
                <span className="font-extralight text-l">Male</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Weight:</span>
                <span className="font-extralight text-l">120lbs</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Height:</span>
                <span className="font-extralight text-l">5ft</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Email:</span>
                <span className="font-extralight text-l">idk@gmail.com</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Phone:</span>
                <span className="font-extralight text-l">(9990-999-9999)</span>
              </div>
            </div>
          </section>
          <hr className="mt-4 border-t border-gray-300" />
          <section>
            <h1 className="font-light text-xl py-2">Medical History</h1>
            <div className="px-4">
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Symptoms:</span>
                <span className="font-extralight text-l">Cough, Fever, Abdominal Pain</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Conditions:</span>
                <span className="font-extralight text-l">
                  TB, Back Pain
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Allergies:</span>
                <span className="font-extralight text-l">
                  None
                </span>
              </div><div className="flex items-start">
                <span className="font-medium text-l w-1/6">Surgeries:</span>
                <span className="font-extralight text-l">
                  Torn ACL
                </span>
              </div>
            </div>
          </section>
          <hr className="mt-4 border-t border-gray-300" />
          <section>
            <h1 className="font-light text-xl py-2">Additional Notes</h1>
            <div className="px-4">
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Symptoms:</span>
                <span className="font-extralight text-l">Cough, Fever, Abdominal Pain</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Conditions:</span>
                <span className="font-extralight text-l">
                  TB, Back Pain
                </span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Allergies:</span>
                <span className="font-extralight text-l">
                  None
                </span>
              </div><div className="flex items-start">
                <span className="font-medium text-l w-1/6">Surgeries:</span>
                <span className="font-extralight text-l">
                  Torn ACL
                </span>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div >
  );
};

export default PatientData;
