import React from 'react';
import ReactDOM from 'react-dom/client';
import Game from './components/game/Game';
import Table from './components/table/Table';
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Game />
    <Table />
  </React.StrictMode>
);
