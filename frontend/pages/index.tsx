import { Navbar } from '@/components/shared';
import DashboardTable from '@/components/dashboard/dashboard-table';

export default function Home() {
  const headers = ["First Name", "Last Name", "Age", "Height", "Weight", "Symptoms", "Conditions", "Diagnosis", "Medications", "Next Appt."];

  const data = [
    {
      firstName: 'Bob',
      lastName: 'Shmungo',
      age: 34,
      height: '2.6m',
      weight: 145,
      symptoms: 'Fever',
      conditions: 'Dementia',
      diagnosis: 'Sepsis',
      medications: 'Tylenol',
      nextApt: '12/16/2023',
    },
    {
      firstName: 'Bob',
      lastName: 'Shmungo',
      age: 34,
      height: '2.6m',
      weight: 145,
      symptoms: 'Fever',
      conditions: 'Dementia',
      diagnosis: 'Sepsis',
      medications: 'Tylenol',
      nextApt: '12/16/2023',
    },
    // Add more data objects as needed
  ];
  return (
    <div>
      <Navbar />
      <DashboardTable headers={headers} data={data} />
    </div>
  );

}
