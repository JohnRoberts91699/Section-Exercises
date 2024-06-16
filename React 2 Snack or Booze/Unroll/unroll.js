// unroll.js
function unroll(square) {
    const result = [];
    while (square.length) {
      // Extract and remove the first row
      result.push(...square.shift());
      
      // Extract and remove the last element of each remaining row
      for (let row of square) {
        result.push(row.pop());
      }
      
      // Extract and remove the last row in reverse order (if any rows left)
      if (square.length) {
        result.push(...square.pop().reverse());
      }
      
      // Extract and remove the first element of each remaining row in reverse order
      for (let i = square.length - 1; i >= 0; i--) {
        result.push(square[i].shift());
      }
    }
    return result;
  }
  
  module.exports = unroll;
  