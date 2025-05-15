const sum1327 = require('../sum1327.js');

test('adds 24 + 88 to equal 112 + 0.7865022518954626', () => {
  expect(sum1327(24, 88)).toBe(112 + 0.7865022518954626);
});