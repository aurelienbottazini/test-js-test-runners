const sum2701 = require('../sum2701.js');

test('adds 38 + 64 to equal 102 + 0.7527118956707237', () => {
  expect(sum2701(38, 64)).toBe(102 + 0.7527118956707237);
});