import React, { useState, useEffect } from 'react';
import Rating from 'react-rating-stars-component';
import axios from 'axios';

const DrugInfo: React.FC = () => {
    const [data, setData] = useState<any>();
    // Sample list of conditions and corresponding drug information
    useEffect(() => {
        axios.get('http://localhost:8080/medications/chickenpox').then(res => { console.log(res) }).catch(err => console.log(err))
    }, [])

    const conditions = [
        { condition: 'Condition 1', drugName: 'Drug A', easeOfUse: 4, effectiveness: 3, reviews: 4, satisfaction: 4 },
        { condition: 'Condition 2', drugName: 'Drug B', easeOfUse: 5, effectiveness: 5, reviews: 5, satisfaction: 5 },
        { condition: 'Condition 3', drugName: 'Drug C', easeOfUse: 3, effectiveness: 4, reviews: 3, satisfaction: 3 },
    ];

    const conditionsList = [
        { condition: 'chickenpox', drugName: 'Drug A', easeOfUse: 4, effectiveness: 3, reviews: 4, satisfaction: 4 },
        { condition: 'fibromyalgia', drugName: 'Drug B', easeOfUse: 5, effectiveness: 5, reviews: 5, satisfaction: 5 },
        { condition: 'edema', drugName: 'Drug C', easeOfUse: 3, effectiveness: 4, reviews: 3, satisfaction: 3 },
        { condition: 'scabies', drugName: 'Drug C', easeOfUse: 3, effectiveness: 4, reviews: 3, satisfaction: 3 },
        { condition: 'endometriosis', drugName: 'Drug C', easeOfUse: 3, effectiveness: 4, reviews: 3, satisfaction: 3 },
    ];

    const [selectedCondition, setSelectedCondition] = useState<string>('');
    const [drugInfo, setDrugInfo] = useState<any | null>(null);

    const handleConditionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const condition = event.target.value;
        const selectedDrug = conditions.find((item) => item.condition === condition);
        setDrugInfo(selectedDrug || null);
        setSelectedCondition(condition);
    };

    return (
        <div className="p-8">
            <h1 className="text-3xl font-semibold mb-4">Drug Information</h1>
            <div className="mb-4">
                <label htmlFor="conditionSelect" className="block text-gray-700 font-bold mb-2">
                    Select a Condition:
                </label>
                <select
                    id="conditionSelect"
                    onChange={handleConditionChange}
                    value={selectedCondition}
                    className="w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                >
                    <option value="">-- Select Condition --</option>
                    {conditions.map((item, index) => (
                        <option key={index} value={item.condition}>
                            {item.condition}
                        </option>
                    ))}
                </select>
            </div>
            {drugInfo && (
                <div className="bg-stone-100 border p-4 rounded-md shadow">
                    <h2 className="text-2xl font-semibold mb-2">Drug Name: {drugInfo.drugName}</h2>
                    <p className="mb-2">
                        Ease of Use:
                        <Rating
                            value={drugInfo.easeOfUse}
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    </p>
                    <p className="mb-2">
                        Effectiveness:
                        <Rating
                            value={drugInfo.effectiveness}
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    </p>
                    <p className="mb-2">
                        Reviews:
                        <Rating
                            value={drugInfo.reviews}
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    </p>
                    <p>
                        Satisfaction:
                        <Rating
                            value={drugInfo.satisfaction}
                            count={5}
                            size={24}
                            activeColor="#ffd700"
                            isHalf={true}
                            edit={false}
                        />
                    </p>
                </div>
            )}
        </div>
    );
};

export default DrugInfo;
