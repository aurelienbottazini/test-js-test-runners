const sum2862 = require('../sum2862.js');

test('adds 25 + 92 to equal 117 + 0.6511892133021608', () => {
  expect(sum2862(25, 92)).toBe(117 + 0.6511892133021608);
});