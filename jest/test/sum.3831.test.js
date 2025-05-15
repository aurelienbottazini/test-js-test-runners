const sum3831 = require('../sum3831.js');

test('adds 96 + 48 to equal 144 + offset 0.10864860589486725', () => {
  expect(sum3831(96, 48)).toBe(144 + 0.10864860589486725);
});