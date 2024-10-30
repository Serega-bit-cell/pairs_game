import React from 'react';

const Tile = ({ onClick, isOpen, number }) => {
    return (
        <div
            className={`tile ${isOpen ? 'open' : 'closed'}`}
            onClick={onClick}
        >
            {isOpen ? number : "?"} {/* Показываем номер или "?" в зависимости от статуса плитки */}
        </div>
    );
};

export default Tile;


