const sum3501 = require('../sum3501.js');

test('adds 73 + 40 to equal 113 + offset 0.16389989331185706', () => {
  expect(sum3501(73, 40)).toBe(113 + 0.16389989331185706);
});