import React from 'react';
import  { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

const SalesByCountry = (props) => {

    const [categorySales, setCategorySales] = useState('country')
    const [salesData, setSalesData] = useState(props.salesBy['country'])

    const handleChange = (event) =>{
        setCategorySales(event.target.value)
    }

    useEffect(() => {
        setSalesData(props.salesBy[categorySales])
        console.log("updating")
    }, [categorySales]);

    console.log(props.salesBy.length)
    console.log(props.salesBy.country)
    // console.log(props.salesBy[2])
    // console.log(props.salesBy[3])
    // console.log(props.salesBy[0])
    return (
        <div>
            <label>Sales By </label>
            <select value={categorySales} onChange={handleChange}>
                {Object.keys(props.salesBy).map((category,key) => <option key={key} value={category}>{category}</option>)}
            </select>
            <BarChart width={830} height={250} data={salesData} >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" interval={0} padding={{right:10}} tick={{fontSize: 12}} 
                angle={9} dx={15} dy={10} minTickGap={-200}/>
                <YAxis />
                <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default SalesByCountry;