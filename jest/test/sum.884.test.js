const sum884 = require('../sum884.js');

test('adds 73 + 40 to equal 113 + 0.9404047891076657', () => {
  expect(sum884(73, 40)).toBe(113 + 0.9404047891076657);
});