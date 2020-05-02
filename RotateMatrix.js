// input = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9]
// ]

// output = [
//   return nothing, just mutate the original array
// ]


// pseudocode


// 1) reverse outer arrays 
// 2) for each row: 
//   - for each column 
//     - flip coordinates



const rotate = function (matrix) {
  matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < i; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
}

// O(n^2); O(1) - constant space

