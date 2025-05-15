const sum4670 = require('../sum4670.js');

test('adds 64 + 63 to equal 127 + 0.6078688634061302', () => {
  expect(sum4670(64, 63)).toBe(127 + 0.6078688634061302);
});