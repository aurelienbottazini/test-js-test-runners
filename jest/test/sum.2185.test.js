const sum2185 = require('../sum2185.js');

test('adds 91 + 23 to equal 114 + 0.9730265358381162', () => {
  expect(sum2185(91, 23)).toBe(114 + 0.9730265358381162);
});