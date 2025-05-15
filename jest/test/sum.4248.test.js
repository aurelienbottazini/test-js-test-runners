const sum4248 = require('../sum4248.js');

test('adds 90 + 29 to equal 119 + offset 0.7460239035966494', () => {
  expect(sum4248(90, 29)).toBe(119 + 0.7460239035966494);
});