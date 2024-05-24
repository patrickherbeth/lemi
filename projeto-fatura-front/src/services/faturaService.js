// src/services/faturaService.js

import axios from 'axios';
import { Fatura } from '../models/Fatura';

const API_URL = 'http://localhost:3000/faturas';

export const faturaService = {
    async getAllFaturas() {
        const response = await axios.get(`${API_URL}/get-all`);
        return response.data.map(faturaData => new Fatura(faturaData));
    },
};
