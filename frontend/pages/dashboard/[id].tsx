//@ts-nocheck
import React from 'react';
import { useRouter } from 'next/router';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import email from '../../emails/email-form'

const PatientData = () => {
  const router = useRouter();
  const { id } = router.query;
  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/patient/${id}`);
        setPatientData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, [id]);

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
              {patientData.medication && patientData.medication.length > 0 ? (
                <span className="font-extralight text-l">
                  {patientData.medication.map((item, index) => (
                    <span key={index}>{item} </span>
                  ))}
                </span>
              ) : (
                <span className="font-extralight text-l">N/A</span>
              )}
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
              <h1 className="font-medium text-3xl flex items-left justify-left">{patientData.firstName} {patientData.lastName}</h1>
              <p className="font-light text-m flex">Patient for: 2 years</p>
              <div className="flex justify-end">
                <Link href="">
                  <button className="mx-2 my-2 bg-yellow-500 hover:bg-yellow-600 text-white font-light py-2 px-4 rounded-lg">
                    Edit
                  </button>
                </Link>
                <Link href="../email-form">
                  <button className="my-2 bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded-lg">
                    Contact Patient
                  </button>
                </Link>
              </div>

            </div>

            <hr className="border-t border-gray-300" />
            <h1 className="font-light text-xl py-2">Personal Details</h1>
            <div className="px-4">
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Age:</span>
                <span className="font-extralight text-l">{patientData.age}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Gender:</span>
                <span className="font-extralight text-l"></span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Weight:</span>
                <span className="font-extralight text-l">{patientData.weight}</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Height:</span>
                <span className="font-extralight text-l"></span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Email:</span>
                <span className="font-extralight text-l"></span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-20">Phone:</span>
                <span className="font-extralight text-l">{patientData.phone}</span>
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
                <span className="font-extralight text-l">TB, Back Pain</span>
              </div>
              <div className="flex items-start">
                <span className="font-medium text-l w-1/6">Allergies:</span>
                <span className="font-extralight text-l">None</span>
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
                <span className="font-extralight text-l">Patient is uncooperative.</span>
              </div>
            </div>
          </section>
        </div>
      </div>

    </div >
  );
};

export default PatientData;
