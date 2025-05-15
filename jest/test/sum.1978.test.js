const sum1978 = require('../sum1978.js');

test('adds 98 + 36 to equal 134 + offset 0.712400921260326', () => {
  expect(sum1978(98, 36)).toBe(134 + 0.712400921260326);
});