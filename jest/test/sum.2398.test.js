const sum2398 = require('../sum2398.js');

test('adds 69 + 16 to equal 85 + 0.0939448494099524', () => {
  expect(sum2398(69, 16)).toBe(85 + 0.0939448494099524);
});