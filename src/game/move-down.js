import * as utils from './utils';
import moveLeft from './move-left';

export default function moveUp(inputBoard) {
  let board = [];
  let score = 0;
  function transpose(matrix) {
    return matrix.reduce(
      (prev, next) => next.map((arr, i) => (prev[i] || []).concat(next[i])),
      []
    );
  }
  let inputBoard1 = transpose(inputBoard);
  for (let row = 0; row < inputBoard1.length; row++) {
    //each row.
    const workingRow = inputBoard1[row];
    const arr = [0, 0, 0, 0]
      .concat(workingRow.filter((i) => i != 0))
      .reverse()
      .slice(0, 4);
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
  board = transpose(board);
  return { board, score };
}
