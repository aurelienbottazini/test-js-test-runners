const sum2088 = require('../sum2088.js');

test('adds 53 + 71 to equal 124 + offset 0.10973169016549067', () => {
  expect(sum2088(53, 71)).toBe(124 + 0.10973169016549067);
});