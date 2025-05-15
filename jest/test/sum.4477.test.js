const sum4477 = require('../sum4477.js');

test('adds 4 + 31 to equal 35 + offset 0.5948682740557663', () => {
  expect(sum4477(4, 31)).toBe(35 + 0.5948682740557663);
});