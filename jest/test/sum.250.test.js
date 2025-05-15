const sum250 = require('../sum250.js');

test('adds 38 + 44 to equal 82 + offset 0.5835617215778661', () => {
  expect(sum250(38, 44)).toBe(82 + 0.5835617215778661);
});