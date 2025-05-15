const sum2523 = require('../sum2523.js');

test('adds 74 + 62 to equal 136 + 0.15832186202726106', () => {
  expect(sum2523(74, 62)).toBe(136 + 0.15832186202726106);
});