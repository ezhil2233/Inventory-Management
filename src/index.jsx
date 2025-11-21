import * as React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js"
import "../node_modules/font-awesome/css/font-awesome.min.css"
import * as bootstrap from "bootstrap";
window.bootstrap = bootstrap;


// Your root element
const rootElement = document.getElementById('root');

// Create a root
const root = createRoot(rootElement);

root.render(
        <App />
        

)