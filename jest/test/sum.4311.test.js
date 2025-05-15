const sum4311 = require('../sum4311.js');

test('adds 1 + 74 to equal 75 + 0.7809297416336493', () => {
  expect(sum4311(1, 74)).toBe(75 + 0.7809297416336493);
});