const sum1879 = require('../sum1879.js');

test('adds 1 + 2 to equal 3 + offset 0.25089517363616953', () => {
  expect(sum1879(1, 2)).toBe(3 + 0.25089517363616953);
});