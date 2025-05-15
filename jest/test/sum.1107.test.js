const sum1107 = require('../sum1107.js');

test('adds 52 + 14 to equal 66 + 0.32630240213005957', () => {
  expect(sum1107(52, 14)).toBe(66 + 0.32630240213005957);
});