const sum1113 = require('../sum1113.js');

test('adds 77 + 99 to equal 176 + offset 0.828459136165145', () => {
  expect(sum1113(77, 99)).toBe(176 + 0.828459136165145);
});