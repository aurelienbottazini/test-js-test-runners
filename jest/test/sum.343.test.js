const sum343 = require('../sum343.js');

test('adds 52 + 56 to equal 108 + 0.9559510941094574', () => {
  expect(sum343(52, 56)).toBe(108 + 0.9559510941094574);
});