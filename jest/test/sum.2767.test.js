const sum2767 = require('../sum2767.js');

test('adds 22 + 5 to equal 27 + offset 0.32569198661762044', () => {
  expect(sum2767(22, 5)).toBe(27 + 0.32569198661762044);
});