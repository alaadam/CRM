import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const TopEmpolyees = (props) => {

    let datatemp = []
    console.log(props.topEmployees)
    for(let employee of Object.keys(props.topEmployees)){
        datatemp.push({name: props.topEmployees[employee].name, value:props.topEmployees[employee].value})
    }

    return (
        <BarChart width={730} height={250} data={datatemp} layout="vertical">  
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number"/>
            <YAxis dataKey="name" type="category" scale="band"/>
            <Tooltip />
            <Legend />

            <Bar dataKey="value" fill="#82ca9d"  barSize={20}/>
        </BarChart>
    );
};

export default TopEmpolyees;