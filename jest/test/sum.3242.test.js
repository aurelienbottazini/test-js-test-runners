const sum3242 = require('../sum3242.js');

test('adds 1 + 85 to equal 86 + 0.3371223673681435', () => {
  expect(sum3242(1, 85)).toBe(86 + 0.3371223673681435);
});