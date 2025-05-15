const sum56 = require('../sum56.js');

test('adds 4 + 44 to equal 48 + 0.19399956412925812', () => {
  expect(sum56(4, 44)).toBe(48 + 0.19399956412925812);
});