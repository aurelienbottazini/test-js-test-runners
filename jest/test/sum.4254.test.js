const sum4254 = require('../sum4254.js');

test('adds 87 + 11 to equal 98 + 0.7729351540085875', () => {
  expect(sum4254(87, 11)).toBe(98 + 0.7729351540085875);
});