const sum61 = require('../sum61.js');

test('adds 51 + 31 to equal 82 + 0.1885988583910967', () => {
  expect(sum61(51, 31)).toBe(82 + 0.1885988583910967);
});