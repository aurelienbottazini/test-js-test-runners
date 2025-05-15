const sum1953 = require('../sum1953.js');

test('adds 62 + 85 to equal 147 + offset 0.5915326861817923', () => {
  expect(sum1953(62, 85)).toBe(147 + 0.5915326861817923);
});