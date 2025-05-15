const sum4629 = require('../sum4629.js');

test('adds 60 + 58 to equal 118 + 0.886142305471318', () => {
  expect(sum4629(60, 58)).toBe(118 + 0.886142305471318);
});