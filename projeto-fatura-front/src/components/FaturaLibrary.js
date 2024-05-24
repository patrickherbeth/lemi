// src/components/FaturaLibrary.js

import React, { useEffect, useState } from 'react';
import { faturaService } from '../services/faturaService';

const FaturaLibrary = () => {
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
            <h1>Biblioteca de Faturas</h1>
            <label>
                No DO CLIENTE:
                <input
                    type="text"
                    value={clienteId}
                    onChange={e => setClienteId(e.target.value)}
                />
            </label>
            <ul>
                {filteredFaturas.map(fatura => (
                    <li key={fatura.numeroCliente}>
                        <a href={`/faturas/${fatura.numeroCliente}`}>Download Fatura {fatura.numeroCliente}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FaturaLibrary;
