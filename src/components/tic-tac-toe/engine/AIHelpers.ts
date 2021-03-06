import {Board} from './Board';
import {Symbols} from './Symbols';

export default class AIHelpers {
    static playerWon(board: Board, player: string )  {
        if (
            (board[0] === player && board[1] === player && board[2] === player) ||
            (board[3] === player && board[4] === player && board[5] === player) ||
            (board[6] === player && board[7] === player && board[8] === player) ||
            (board[0] === player && board[3] === player && board[6] === player) ||
            (board[1] === player && board[4] === player && board[7] === player) ||
            (board[2] === player && board[5] === player && board[8] === player) ||
            (board[0] === player && board[4] === player && board[8] === player) ||
            (board[2] === player && board[4] === player && board[6] === player)
        ) {
            return true;
        }
        else {
            return false;
        }
    }

    static isGameFinished(board: Board, symbols: Symbols) {
        if ( !this.isMovesLeft(board, symbols) ) {
            return true;
        }
        const { huPlayer, aiPlayer } = symbols;
        if( this.playerWon(board, huPlayer ) ||  this.playerWon(board, aiPlayer )) {
            return true;
        }
        return false;
    }

    /**
     * Gets an Array of empty indexes
     * @param {Array} board
     * @param {Object} symbols
     * @return {Array}
     */
    static getEmptyIndexies(board: Board, symbols: Symbols): number[]   {
        const { huPlayer, aiPlayer } = symbols;
        return  board.filter(s => s !== huPlayer && s !== aiPlayer) as number[];
    }

    /**
     * Checks if the are empty squares. Returns true|false.
     * @param {Array} board
     * @param {Object} symbols
     * @return {bool}
     */
    static isMovesLeft(board: Board, symbols: Symbols) {
        return this.getEmptyIndexies(board, symbols).length !== 0;
    }
}