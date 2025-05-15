const sum1046 = require('../sum1046.js');

test('adds 26 + 53 to equal 79 + 0.6549071580416304', () => {
  expect(sum1046(26, 53)).toBe(79 + 0.6549071580416304);
});