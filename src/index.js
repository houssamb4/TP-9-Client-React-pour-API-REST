import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// Render a simple app composed of CompteForm and CompteList
import CompteForm from './components/CompteForm';
import CompteList from './components/CompteList';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="container mt-4">
      <h1 className="mb-4">Gestion des Comptes</h1>
      <CompteForm />
      <hr />
      <CompteList />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
