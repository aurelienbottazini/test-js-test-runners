const sum931 = require('../sum931.js');

test('adds 67 + 55 to equal 122 + 0.3776481461990103', () => {
  expect(sum931(67, 55)).toBe(122 + 0.3776481461990103);
});