const sum4164 = require('../sum4164.js');

test('adds 28 + 2 to equal 30 + offset 0.8444188345654342', () => {
  expect(sum4164(28, 2)).toBe(30 + 0.8444188345654342);
});