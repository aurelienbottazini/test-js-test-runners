const sum133 = require('../sum133.js');

test('adds 87 + 12 to equal 99 + offset 0.6038726990711709', () => {
  expect(sum133(87, 12)).toBe(99 + 0.6038726990711709);
});