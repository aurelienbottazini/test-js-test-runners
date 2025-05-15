const sum2679 = require('../sum2679.js');

test('adds 23 + 41 to equal 64 + offset 0.842069568982613', () => {
  expect(sum2679(23, 41)).toBe(64 + 0.842069568982613);
});