/**
 * Write code to move and merge elements in the left direction.
 */
export default function moveLeft(inputBoard) {
  let board = [];
  let score = 0;
  for (let row = 0; row < inputBoard.length; row++) {
    //each row.
    const workingRow = inputBoard[row];
    let arr = workingRow
      .filter((i) => i != 0)
      .concat(0, 0, 0, 0)
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
 
    board.push(arr1);
  }
  return { board, score };
}
