const sum2850 = require('../sum2850.js');

test('adds 28 + 86 to equal 114 + 0.687614934957426', () => {
  expect(sum2850(28, 86)).toBe(114 + 0.687614934957426);
});