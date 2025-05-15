const sum4528 = require('../sum4528.js');

test('adds 33 + 2 to equal 35 + 0.7228709365280434', () => {
  expect(sum4528(33, 2)).toBe(35 + 0.7228709365280434);
});