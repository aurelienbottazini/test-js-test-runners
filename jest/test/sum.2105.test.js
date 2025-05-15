const sum2105 = require('../sum2105.js');

test('adds 94 + 67 to equal 161 + 0.09159687699158625', () => {
  expect(sum2105(94, 67)).toBe(161 + 0.09159687699158625);
});