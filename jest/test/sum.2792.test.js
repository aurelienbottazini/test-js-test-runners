const sum2792 = require('../sum2792.js');

test('adds 44 + 85 to equal 129 + 0.43397280773591385', () => {
  expect(sum2792(44, 85)).toBe(129 + 0.43397280773591385);
});