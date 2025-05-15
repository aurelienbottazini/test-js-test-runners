const sum1163 = require('../sum1163.js');

test('adds 8 + 86 to equal 94 + offset 0.3687349058251086', () => {
  expect(sum1163(8, 86)).toBe(94 + 0.3687349058251086);
});