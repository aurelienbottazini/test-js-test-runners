const sum3831 = require('../sum3831.js');

test('adds 80 + 56 to equal 136 + 0.7009949594937532', () => {
  expect(sum3831(80, 56)).toBe(136 + 0.7009949594937532);
});