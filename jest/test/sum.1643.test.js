const sum1643 = require('../sum1643.js');

test('adds 79 + 60 to equal 139 + offset 0.7504277902888223', () => {
  expect(sum1643(79, 60)).toBe(139 + 0.7504277902888223);
});