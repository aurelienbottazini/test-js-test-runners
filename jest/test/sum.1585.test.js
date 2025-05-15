const sum1585 = require('../sum1585.js');

test('adds 13 + 42 to equal 55 + offset 0.2199008992118321', () => {
  expect(sum1585(13, 42)).toBe(55 + 0.2199008992118321);
});