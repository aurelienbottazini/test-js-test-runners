const sum4713 = require('../sum4713.js');

test('adds 40 + 78 to equal 118 + offset 0.7669427892122527', () => {
  expect(sum4713(40, 78)).toBe(118 + 0.7669427892122527);
});