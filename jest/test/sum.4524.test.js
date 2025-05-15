const sum4524 = require('../sum4524.js');

test('adds 8 + 94 to equal 102 + 0.5216305707750017', () => {
  expect(sum4524(8, 94)).toBe(102 + 0.5216305707750017);
});