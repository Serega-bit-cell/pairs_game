import React from 'react';
import './App.css'; // Импортируем стили
import Board from './components/Board';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Игра "Пары"</h1>
            <Board />
        </div>
    );
};

export default App;
