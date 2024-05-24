// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import FaturaLibrary from './components/FaturaLibrary';
import UploadPDF from './components/UploadPDF';  // Importando o novo componente

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route path="/biblioteca" component={FaturaLibrary} />
                    <Route path="/upload" component={UploadPDF} />  {/* Nova rota */}
                    <Route path="/" component={Dashboard} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
