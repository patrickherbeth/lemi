// src/components/ValoresChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const ValoresChart = ({ faturas }) => {
    const data = faturas.map(fatura => ({
        name: fatura.numeroCliente,
        valorTotalSemGD: fatura.valorTotalSemGDRS,
        economiaGD: fatura.economiaGDRS,
    }));

    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="valorTotalSemGD" stroke="#8884d8" />
            <Line type="monotone" dataKey="economiaGD" stroke="#82ca9d" />
        </LineChart>
    );
};

export default ValoresChart;
