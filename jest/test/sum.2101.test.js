const sum2101 = require('../sum2101.js');

test('adds 2 + 98 to equal 100 + 0.9525548270164279', () => {
  expect(sum2101(2, 98)).toBe(100 + 0.9525548270164279);
});