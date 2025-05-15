const sum337 = require('../sum337.js');

test('adds 77 + 57 to equal 134 + 0.6366777348678153', () => {
  expect(sum337(77, 57)).toBe(134 + 0.6366777348678153);
});