import React , {useState , useEffect , }from 'react'
import {Button} from '@material-ui/core'
import {
    randomIntFromInterval,
  } from '../lib/utils.js';
import './Board.css';


//                              LinkedListNode == data structure         __utag tentsuulen hadaglah 
class LinkedListNode {                   //head=[data , next] => [data , next] => [data , next] => [null === tail]
    extends(value){
        this.value = value;
        this.next = null;
    }
}


class SinglyLinkedList {
    extends (value){
        const node = new LinkedListNode(value)
        this.head = node;       //snake head utag hadgalah
        this.tail = node;       //snake tail utag hadgalah          
    }
}

class Cell {
    extends (row , col , value){ 
        this.row = row;
        this.col = col;
        this.value = value;
    }
}

const BOARD_S = 10

const Direction = {
    UP:'UP',
    RIGHT:"RIGHT",
    DOWN:"DOWN"   ,
    LEFT:"LEFT"
}
    
    
    
export const Board = () => {
    const [board ] = useState(createBoard(BOARD_S));
    const [foodCell , setFoodCell] = useState(48);                                          //      value=48    
    const [snakeCells , setSnakeCells] = useState(new Set([44]));                           //      value=44    Set= Snake hadaglah 
    const [snake] = useState(new SinglyLinkedList(new Cell(4 , 3 , 44)));                   //      row=4       col=3       value=44    ???
    const [direction , setDirection]= useState(Direction.RIGHT)

useEffect(() => {
    setInterval(() => {
    },1000);


    window.addEventListener('keydown' , e =>{
        const newDirection = getDirectionFromKey(e.key);
        const isValidDirection = newDirection !== '';
        if(isValidDirection)setDirection(newDirection);
    });
} , []);

function moveSnake(){
    const currentHeadCoords = {
        row : snake.head.value.row,
        col : snake.head.value.col,
    }




const nextHeadCoord = getNextHeadCoords(currentHeadCoords, direction);
const nextHeadValue = board[nextHeadCoord.row][nextHeadCoord.col];

if(nextHeadValue === foodCell) handleFoodConsumption();
const newHead = new LinkedListNode(
    new Cell(nextHeadCoord.row , nextHeadCoord.col , nextHeadValue),
);
const newSnakeCells = new Set(snakeCells);
newSnakeCells.delete(snake.tail.value.value);
newSnakeCells.add(nextHeadValue);

snake.head = newHead;

snake.tail = snake.tail.next;

if (snake.tail === null) snake.tail = snake.head;
setSnakeCells(newSnakeCells);

}
const getNextHeadCoords = (currentHeadCoords , direction) =>{
    if(direction === Direction.UP){
        return{
            row : currentHeadCoords.row - 1,
            col : currentHeadCoords.col
        }
    }
    if(direction === Direction.RIGHT){
        return{
            row : currentHeadCoords.row ,
            col : currentHeadCoords.col + 1
        }
    }
    if(direction === Direction.DOWN){
        return{
            row : currentHeadCoords.row + 1,
            col : currentHeadCoords.col 
        }
    }
    if(direction === Direction.LEFT){
        return{
            row : currentHeadCoords.row ,
            col : currentHeadCoords.col - 1
        }
    }
}

const handleFoodConsumption = () =>{
    const maxPossibleCellValue = BOARD_S * BOARD_S;
    let nextFoodCell;
    while(true){
        nextFoodCell = randomIntFromInterval(1 , maxPossibleCellValue);
        if(snakeCells.has(nextFoodCell) || foodCell === nextFoodCell) continue;
        break;
    }
    setFoodCell(nextFoodCell);
}

                                                                  return (
                                                                    <>
                                                                    <Button color='primary' onClick={() => moveSnake()} variant='contained' style={{marginBottom:"2vh"}}>move</Button>
                                                                    <div className="board">
                                                                        {board.map((row , rowIdx) => (
                                                                            <div key={rowIdx} className="row">{
                                                                                row.map((cellValue , cellIdx) => (
                                                                                    <div 
                                                                                    key={cellIdx} 
                                                                                    className={`cell ${
                                                                                        snakeCells.has(cellValue) ? 'snake-cell' : ''
                                                                                    } ${foodCell === cellValue ? 'food-cell' : ''}`}></div> 
                                                                                ))
                                                                            }</div>
                                                                        ))}
                                                                    </div>  
                                                                    </>
                                                                  )
}
    



//create board
const createBoard = BOARD_S =>{
    let couter = 1;
    const board = [] ; 
    for(let row = 0 ; row < BOARD_S ; row++){
        const currentRow = [];
        for(let col = 0 ; col < BOARD_S ; col++){
            currentRow.push(couter++);
        }
        board.push(currentRow)
    }
    return board;
}




const getDirectionFromKey = key =>{
    if (key === 'ArrowUp') return Direction.UP;
    if (key === 'ArrowRight') return Direction.RIGHT;
    if (key === 'ArrowDown') return Direction.DOWN;
    if (key === 'ArrowLeft') return Direction.LEFT;
    return '';
}








export default Board;