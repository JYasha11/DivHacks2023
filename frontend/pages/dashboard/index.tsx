import DashboardTable from '@/components/dashboard/dashboard-table';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Card from '@/components/shared/card';

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

  const data = [
    {
      id: '123567',
      firstName: 'Bob',
      lastName: 'Shmungo',
      age: 34,
      height: '2.6m',
      weight: '145',
      symptoms: 'Fever',
      conditions: 'Dementia',
      diagnosis: 'Sepsis',
      medications: 'Tylenol',
      nextApt: '12/16/2023',
      imageURL:
        'https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec',
    },
    // Add more data objects as needed
  ];

  return (
    <div>
      {/*<DashboardTable headers={headers} data={data} />*/}
      {data.map((item, index) => (
        <Card
          key={index}
          firstName={item.firstName}
          lastName={item.lastName}
          age={item.age}
          height={item.height}
          weight={item.weight}
          imageUrl={item.imageURL}
        />
      ))}
    </div>
  );
};

export default Dashboard;
export const getServerSideProps = withPageAuthRequired();
