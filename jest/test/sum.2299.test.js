const sum2299 = require('../sum2299.js');

test('adds 28 + 27 to equal 55 + offset 0.2052593479799889', () => {
  expect(sum2299(28, 27)).toBe(55 + 0.2052593479799889);
});