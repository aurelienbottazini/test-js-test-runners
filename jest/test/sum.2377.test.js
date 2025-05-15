const sum2377 = require('../sum2377.js');

test('adds 68 + 31 to equal 99 + 0.5219165552785592', () => {
  expect(sum2377(68, 31)).toBe(99 + 0.5219165552785592);
});