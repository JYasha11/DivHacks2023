//@ts-nocheck
import DashboardTable from '@/components/dashboard/dashboard-table';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Card from '@/components/shared/card';
import axios, { Axios } from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

const Dashboard = () => {
  const headers = [
    'First Name',
    'Last Name',
    'Age',
    'Height',
    'Weight',
    'Symptoms',
    'Conditions',
    'Diagnosis',
    'Medications',
    'Next Appt.',
  ];

  const [patientData, setPatientData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/patients`);
        setPatientData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return (
    <div className="bg-white">
      {/*<DashboardTable headers={headers} data={data} />*/}

      {patientData.map((item, index) => (
        <Link key={index._id} href={`dashboard/${item._id}`}>
          <Card
            firstName={item.firstName}
            lastName={item.lastName}
            age={item.age}
            height={item.height} //need to add height to backend
            weight={item.weight}
            imageUrl={item.imageURL}
          />
        </Link>
      ))}
    </div>
  );
};

export default Dashboard;
export const getServerSideProps = withPageAuthRequired();
