export const STAGE_WIDTH = 12;
export const STAGE_HEIGHT = 20;
export const ROWPOINTS = [40, 100, 300, 1200];

export const TETROMINOS = {
    0: { shape: [[0]], color: '0, 0, 0 '},
    I: {
        shape: [
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
            [0, 'I', 0, 0],
        ],
        color: '80, 227, 230'
    },
    J: {
        shape: [
        [0, 'J',0],
        [0, 'J',0],
        ['J', 'J',0],
        ],
        color: '36, 95, 223'
    },
    L: {
        shape: [
            [0, 'L', 0],
            [0, 'L', 0],
            [0, 'L', 'L'],
        ],
        color: '223, 173, 36'
    },
    O: {
        shape: [
            ['O', 'O'],
            ['O', 'O'],
        ],
        color: '223, 217, 36'
    }
    
}