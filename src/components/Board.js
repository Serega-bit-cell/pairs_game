import React from 'react';
import Tile from './Tile';
import { useDispatch, useSelector } from 'react-redux';
import { selectTile, resetGame } from '../redux/actions'; // Предполагаем, что у вас есть действие selectTile

const Board = () => {
    const tiles = useSelector(state => state.tiles);
    const dispatch = useDispatch();
    console.log('Текущие плитки:', tiles); 

    return (
        <div className="board">
            {tiles.map(tile => (
                <Tile
                    key={tile.id}
                    number={tile.number} // Передаем number в компонент Tile
                    isOpen={tile.isOpen}
                    onClick={() => dispatch(selectTile(tile.id))}
                />
            ))}
            <button onClick={() => dispatch(resetGame())}>Reset Game</button>
        </div>
    );
};

export default Board;