export const SELECT_TILE = 'SELECT_TILE';
export const RESET_GAME = 'RESET_GAME';

export const selectTile = (id) => ({
    type: SELECT_TILE,
    payload: id
});

export const resetGame = () => ({
    type: RESET_GAME
});