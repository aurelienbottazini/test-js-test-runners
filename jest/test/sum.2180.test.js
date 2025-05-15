const sum2180 = require('../sum2180.js');

test('adds 40 + 49 to equal 89 + offset 0.33830396002805785', () => {
  expect(sum2180(40, 49)).toBe(89 + 0.33830396002805785);
});