const sum2670 = require('../sum2670.js');

test('adds 42 + 26 to equal 68 + 0.28480486581276643', () => {
  expect(sum2670(42, 26)).toBe(68 + 0.28480486581276643);
});