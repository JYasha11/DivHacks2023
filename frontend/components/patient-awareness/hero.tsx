import React from 'react';
import { useState } from 'react';
import axios from 'axios';

const Hero = () => {
  const [data, setData] = useState<any>();
  const [prompt, setPrompt] = useState<any>();
  const [res, setRes] = useState<string>('');

  const submitData = (e: React.FormEvent) => {
    e.preventDefault();

    axios
      .post('http://localhost:5001/get-med', { data: prompt })
      .then((res) => {
        const data = res.data;
        setData(data);

        // Parse the response and set the title and abstract state
        if (data) {
          const result = JSON.parse(data.result);
          console.log(result);

          // Extract and display the response content
          const responseContent = result.choices[0].message.content;
          setRes(result.choices[0].message.content);
          console.log(responseContent);

          // You can set the responseContent in your component's state or display it as needed
          // For example, if you have a state variable called responseState, you can set it like this:
          // setResponseState(responseContent);
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <div className="px-20 min-h-screen bg-[#FAFAF9]">
        <h1 className="text-3xl font-bold flex justify-center py-5 underline">
          Sepsis
        </h1>
        <div className="mx-20 text-center text-xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
          ducimus. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Blanditiis, nemo explicabo! Reiciendis similique tenetur labore
          deleniti quasi quaerat autem impedit exercitationem laboriosam quas
          accusamus ipsam consectetur eum, odio, quod et?
        </div>
        <div className="my-5 text-2xl font-bold flex justify-center items-center underline">
          Causes of Sepsis
        </div>
        <ul className="my-2 text-xl font-medium flex justify-center">
          <li className=" px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Bacterial Infections
          </li>
          <li className="px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Viral Infection
          </li>
          <li className="px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Fungal Infections
          </li>
        </ul>
        <div className="my-5 text-2xl font-bold flex justify-center items-center underline">
          Immediate Cure
        </div>
        <ul className="my-2 text-xl font-medium flex justify-center">
          <li className=" px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Antibiotics
          </li>
          <li className="px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Fluids added to veins
          </li>
          <li className="px-10 mx-10 bg-primary-blue-100 text-white rounded-lg py-2">
            Vasopressors
          </li>
        </ul>
        <h1 className="font-medium text-2xl flex justify-center pt-10">
          Need more help? Talk to our chatbot
        </h1>
        <div>
          <label htmlFor="input-text">Enter your need here</label>
          <div className="block">
            <textarea
              className="border-2 border-black"
              cols={60}
              rows={5}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              required></textarea>
          </div>
        </div>
        <button
          onClick={submitData}
          type="submit"
          className="py-2 px-4 bg-primary-blue-200 text-white">
          Submit
        </button>
      </div>
      <div className="flex justify-center items-center bg-white font-bold text-2xl">
        Result -{' '}
      </div>
      <div className="bg-white font-medium flex justify-center text-xl py-5 px-10">
        {res}
      </div>
    </>
  );
};

export default Hero;
