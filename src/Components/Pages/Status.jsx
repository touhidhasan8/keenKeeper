import React, { useContext } from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { AppContext } from '../Context/ContextProvider';

const Status = () => {
      const { clicked } = useContext(AppContext)
    const data = [
        { name: "Call", value: clicked.length, fill: "#0088FE" },
        { name: "Message", value: clicked.length, fill: "#00C49F" },
        { name: "Video", value: clicked.length, fill: "#FFBB28" },
       
    ];

    return (
        <div className="w-full flex flex-col items-center">
            <h1 className="font-bold text-5xl text-[#244D3F] mb-10 text-center">
                Friendship Analytics
            </h1>

            <div className="w-full max-w-125 h-125">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius="70%"
                            outerRadius="100%"
                            cornerRadius={15}
                            paddingAngle={5}
                            dataKey="value"
                            isAnimationActive={true}
                        >
                        </Pie>
                    <Legend></Legend>
                    <Tooltip/>
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Status;