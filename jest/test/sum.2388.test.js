const sum2388 = require('../sum2388.js');

test('adds 10 + 53 to equal 63 + offset 0.308665379555782', () => {
  expect(sum2388(10, 53)).toBe(63 + 0.308665379555782);
});