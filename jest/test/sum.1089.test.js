const sum1089 = require('../sum1089.js');

test('adds 58 + 54 to equal 112 + 0.8889133909702172', () => {
  expect(sum1089(58, 54)).toBe(112 + 0.8889133909702172);
});