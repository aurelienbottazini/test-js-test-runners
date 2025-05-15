const sum1795 = require('../sum1795.js');

test('adds 76 + 14 to equal 90 + 0.9966654917180016', () => {
  expect(sum1795(76, 14)).toBe(90 + 0.9966654917180016);
});