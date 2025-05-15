const sum642 = require('../sum642.js');

test('adds 10 + 25 to equal 35 + offset 0.6768081144944786', () => {
  expect(sum642(10, 25)).toBe(35 + 0.6768081144944786);
});