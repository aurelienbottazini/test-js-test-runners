const sum2578 = require('../sum2578.js');

test('adds 37 + 16 to equal 53 + offset 0.13275245867963625', () => {
  expect(sum2578(37, 16)).toBe(53 + 0.13275245867963625);
});