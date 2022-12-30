import * as utils from './utils';
import moveLeft from './move-left';
export default function moveRight(inputBoard) {
  let board = [];
  let score = 0;
  for (let row = 0; row < inputBoard.length; row++) {
    //each row.
    const workingRow = inputBoard[row];
    const temp = ([0, 0, 0, 0].concat(workingRow.filter((i) => i > 0))).reverse().slice(0,4);
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == arr[i + 1]) {
        arr[i] += arr[i + 1];
        arr[i + 1] = 0;
      }
    }
    const arr1 = arr
      .filter((i) => i != 0)
      .concat(0, 0, 0, 0)
      .slice(0, 4);
    board.push(arr1.reverse()); 
    
    
     
  }
  console.log( "board",board);

  return { board, score };
}
