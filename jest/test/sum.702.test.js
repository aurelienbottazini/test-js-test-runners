const sum702 = require('../sum702.js');

test('adds 6 + 61 to equal 67 + offset 0.9360623823810056', () => {
  expect(sum702(6, 61)).toBe(67 + 0.9360623823810056);
});