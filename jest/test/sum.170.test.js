const sum170 = require('../sum170.js');

test('adds 87 + 50 to equal 137 + offset 0.8797071798703289', () => {
  expect(sum170(87, 50)).toBe(137 + 0.8797071798703289);
});