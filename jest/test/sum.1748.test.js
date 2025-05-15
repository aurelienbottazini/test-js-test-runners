const sum1748 = require('../sum1748.js');

test('adds 9 + 29 to equal 38 + 0.527925355796824', () => {
  expect(sum1748(9, 29)).toBe(38 + 0.527925355796824);
});