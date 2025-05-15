const sum2986 = require('../sum2986.js');

test('adds 87 + 48 to equal 135 + offset 0.3666113052444455', () => {
  expect(sum2986(87, 48)).toBe(135 + 0.3666113052444455);
});