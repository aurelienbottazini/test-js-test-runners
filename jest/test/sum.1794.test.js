const sum1794 = require('../sum1794.js');

test('adds 29 + 28 to equal 57 + 0.8360585961561646', () => {
  expect(sum1794(29, 28)).toBe(57 + 0.8360585961561646);
});