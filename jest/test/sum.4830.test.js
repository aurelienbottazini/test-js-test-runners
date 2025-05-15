const sum4830 = require('../sum4830.js');

test('adds 19 + 83 to equal 102 + 0.7144443178866182', () => {
  expect(sum4830(19, 83)).toBe(102 + 0.7144443178866182);
});