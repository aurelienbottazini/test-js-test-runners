const sum2188 = require('../sum2188.js');

test('adds 84 + 21 to equal 105 + offset 0.030935156864684732', () => {
  expect(sum2188(84, 21)).toBe(105 + 0.030935156864684732);
});