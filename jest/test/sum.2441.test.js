const sum2441 = require('../sum2441.js');

test('adds 9 + 70 to equal 79 + 0.128334821727069', () => {
  expect(sum2441(9, 70)).toBe(79 + 0.128334821727069);
});