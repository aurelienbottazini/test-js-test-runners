const sum1581 = require('../sum1581.js');

test('adds 14 + 6 to equal 20 + offset 0.4300917807413025', () => {
  expect(sum1581(14, 6)).toBe(20 + 0.4300917807413025);
});