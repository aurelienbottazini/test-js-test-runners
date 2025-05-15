const sum2275 = require('../sum2275.js');

test('adds 92 + 57 to equal 149 + offset 0.9306369529786745', () => {
  expect(sum2275(92, 57)).toBe(149 + 0.9306369529786745);
});