const sum1815 = require('../sum1815.js');

test('adds 75 + 55 to equal 130 + 0.8241285818349892', () => {
  expect(sum1815(75, 55)).toBe(130 + 0.8241285818349892);
});