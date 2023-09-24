{/*import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Button } from '@react-email/button';
import { Html } from '@react-email/html';

// Define your EmailJS service and template IDs
const serviceId = 'YOUR_EMAILJS_SERVICE_ID';
const templateId = 'YOUR_EMAILJS_TEMPLATE_ID';
const userId = 'YOUR_EMAILJS_USER_ID';

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
        <div className="min-h-screen bg-stone-300">
            <section >
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-800">Contact The Patient</h2>
                    <Html>
                        <Button className="bg-black"
                            pX={20}
                            pY={12}
                            href="https://example.com"
                        >
                            Click me
                        </Button>
                    </Html>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-600 sm:text-xl">Looking to communicate to your patient directly? Fill out this form to avoid any medical miscommunication, take out the middleman.</p>
                    <form action="#" className="space-y-8">
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Your Email</label>
                            <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="name@md.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">Subject</label>
                            <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Subject" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">Your message</label>
                            <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Update the patient as necessary"></textarea>
                        </div>
                        <button onClick={sendEmail} type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-stone-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Send Email</button>

                    </form>
                </div>
            </section>
        </div>
    );
};

export default PatientData;*/}
