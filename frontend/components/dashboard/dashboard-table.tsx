import React from 'react';

type DashboardTableProps = {
    headers: string[];
    data: {
        [key: string]: string | number; 
    }[];
};


const DashboardTable: React.FC<DashboardTableProps> = ({ headers, data }) => {
    return (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-black">
                <caption className="p-5 text-lg font-semibold text-left text-stone-800 bg-stone-100">
                    Patient Dashboard
                    <p className="mt-1 text-sm font-normal text-stone-600">Access your patient chart and make necessary changes to their information.</p>
                </caption>
                <thead className="text-xs text-stone-800 uppercase bg-stone-200">
                    <tr>
                        {headers.map((header, index) => (
                            <th key={index} scope="col" className="px-6 py-3">
                                {header}
                            </th>
                        ))}
                        <th scope="col" className="px-6 py-3">
                            <span className="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="bg-stone-100 border-b">
                            {Object.values(item).map((value, index) => (
                                <td key={index} className="px-6 py-4">
                                    {value}
                                </td>
                            ))}
                            <td className="px-6 py-4 text-right">
                                <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DashboardTable;
