const sum2888 = require('../sum2888.js');

test('adds 14 + 65 to equal 79 + 0.9482797920793944', () => {
  expect(sum2888(14, 65)).toBe(79 + 0.9482797920793944);
});