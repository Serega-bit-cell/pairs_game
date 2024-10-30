import { SELECT_TILE, RESET_GAME } from './actions';

// Функция для создания плиток с парными числами от 1 до 8
const createTiles = () => {
    // Создаем массив парных чисел от 1 до 8
    const numbers = Array.from({ length: 8 }, (_, index) => index + 1); // [1, 2, 3, 4, 5, 6, 7, 8]
    
    // Удваиваем массив для пар
    const tiles = [...numbers, ...numbers].map((number, index) => ({
        id: index,
        isOpen: false,
        number: number // Используем число как идентификатор для пар
    }));
    console.log('Созданные плитки:', tiles);

    // Перемешиваем массив плиток
    return tiles.sort(() => Math.random() - 0.5);
};

const initialState = {
    tiles: createTiles(), // Используем функцию для создания плиток
    firstSelected: null,
    secondSelected: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_TILE: {
            const selectedTile = state.tiles.find(tile => tile.id === action.payload);
            console.log('Выбранная плитка:', selectedTile);

            if (!state.firstSelected) {
                return {
                    ...state,
                    firstSelected: selectedTile,
                    tiles: state.tiles.map(tile => tile.id === selectedTile.id ? { ...tile, isOpen: true } : tile),
                };
            } else if (!state.secondSelected && state.firstSelected.id !== selectedTile.id) {
                return {
                    ...state,
                    secondSelected: selectedTile,
                    tiles: state.tiles.map(tile => tile.id === selectedTile.id ? { ...tile, isOpen: true } : tile),
                };
            }

            // Проверяем, выбраны ли обе плитки
            if (state.firstSelected && state.secondSelected) {
                const firstNumber = Number(state.firstSelected.number);
                const secondNumber = Number(state.secondSelected.number);
                const isMatch = firstNumber === secondNumber;

                // Логируем значения перед сравнением
                console.log(`Первый: ${firstNumber}, Второй: ${secondNumber}, Совпадение: ${isMatch}`);

                const updatedTiles = state.tiles.map(tile => {
                    if (tile.id === state.firstSelected.id || tile.id === state.secondSelected.id) {
                        return isMatch ? { ...tile, isOpen: true } : { ...tile, isOpen: false };
                    }
                    return tile;
                });

                return {
                    ...state,
                    tiles: updatedTiles,
                    firstSelected: null, // Очищаем, чтобы можно было выбрать новую пару
                    secondSelected: null,
                };
            }

            return state; // Возвращаем текущее состояние, если ничего не изменилось
        }

        case RESET_GAME:
            return {
                ...initialState,
                tiles: createTiles(), // Создаем заново перемешанные плитки
            };

        default:
            return state;
    }
};

export default reducer;