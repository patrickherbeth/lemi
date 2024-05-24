// src/components/Dashboard.js

import React, { useEffect, useState } from 'react';
import { faturaService } from '../services/faturaService';
import EnergiaChart from './EnergiaChart';
import ValoresChart from './ValoresChart';
import UploadPDF from './UploadPDF';  // Importando o novo componente

const Dashboard = () => {
    const [faturas, setFaturas] = useState([]);
    const [clienteId, setClienteId] = useState('');

    useEffect(() => {
        const fetchFaturas = async () => {
            const data = await faturaService.getAllFaturas();
            setFaturas(data);
        };

        fetchFaturas();
    }, []);

    const filteredFaturas = clienteId
        ? faturas.filter(fatura => fatura.numeroCliente === clienteId)
        : faturas;

    return (
        <div>
            <h1>Dashboard</h1>
            <label>
                No DO CLIENTE:
                <input
                    type="text"
                    value={clienteId}
                    onChange={e => setClienteId(e.target.value)}
                />
            </label>
            <EnergiaChart faturas={filteredFaturas} />
            <ValoresChart faturas={filteredFaturas} />
            <UploadPDF />  {/* Adicionando o componente de upload */}
        </div>
    );
};

export default Dashboard;
