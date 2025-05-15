const sum147 = require('../sum147.js');

test('adds 17 + 12 to equal 29 + 0.3946426316988251', () => {
  expect(sum147(17, 12)).toBe(29 + 0.3946426316988251);
});