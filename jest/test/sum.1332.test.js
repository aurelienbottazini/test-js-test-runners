const sum1332 = require('../sum1332.js');

test('adds 57 + 22 to equal 79 + offset 0.42648408154608863', () => {
  expect(sum1332(57, 22)).toBe(79 + 0.42648408154608863);
});