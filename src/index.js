import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './components/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

// ReactDOM.createRoot( <AppRouter /> ,document.getElementById("root"));

const rootElement = document.getElementById('root');
ReactDOM.createRoot(rootElement).render(<AppRouter />);
