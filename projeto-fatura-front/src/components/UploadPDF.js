// src/components/UploadPDF.js

import React, { useState } from 'react';
import axios from 'axios';

const UploadPDF = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [uploadStatus, setUploadStatus] = useState('');

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleUpload = async () => {
        if (!selectedFile) {
            setUploadStatus('Nenhum arquivo selecionado.');
            return;
        }

        const formData = new FormData();
        formData.append('pdf', selectedFile);

        try {
            const response = await axios.post('http://localhost:3000/extract/extract-pdf-data', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setUploadStatus('Upload bem-sucedido: ' + JSON.stringify(response.data));
        } catch (error) {
            setUploadStatus('Erro no upload: ' + error.message);
        }
    };

    return (
        <div>
            <h2>Upload de Fatura PDF</h2>
            <input type="file" accept="application/pdf" onChange={handleFileChange} />
            <button onClick={handleUpload}>Enviar PDF</button>
            <p>{uploadStatus}</p>
        </div>
    );
};

export default UploadPDF;
