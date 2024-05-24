// src/components/EnergiaChart.js

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const EnergiaChart = ({ faturas }) => {
    const data = faturas.map(fatura => ({
        name: fatura.numeroCliente,
        consumoEnergia: fatura.consumoEnergiaEletricaKWh,
        energiaCompensada: fatura.energiaCompensadaGDIKWh,
    }));

    return (
        <LineChart width={600} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="consumoEnergia" stroke="#8884d8" />
            <Line type="monotone" dataKey="energiaCompensada" stroke="#82ca9d" />
        </LineChart>
    );
};

export default EnergiaChart;
