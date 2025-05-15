const sum2840 = require('../sum2840.js');

test('adds 71 + 20 to equal 91 + 0.16088851275339555', () => {
  expect(sum2840(71, 20)).toBe(91 + 0.16088851275339555);
});