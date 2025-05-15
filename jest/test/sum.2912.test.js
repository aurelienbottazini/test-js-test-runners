const sum2912 = require('../sum2912.js');

test('adds 9 + 96 to equal 105 + offset 0.4262418160999233', () => {
  expect(sum2912(9, 96)).toBe(105 + 0.4262418160999233);
});