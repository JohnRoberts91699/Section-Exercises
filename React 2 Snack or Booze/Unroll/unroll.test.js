// unroll.test.js
const unroll = require('./unroll');

test('unrolls a 4x4 matrix', () => {
  const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];
  expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
});

test('unrolls a 3x3 matrix', () => {
  const smallerSquare = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
  ];
  expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
});

test('unrolls a 2x2 matrix', () => {
  const smallSquare = [
    [1, 2],
    [3, 4]
  ];
  expect(unroll(smallSquare)).toEqual([1, 2, 4, 3]);
});

test('unrolls a 1x1 matrix', () => {
  const singleElement = [
    [1]
  ];
  expect(unroll(singleElement)).toEqual([1]);
});
