const sum2979 = require('../sum2979.js');

test('adds 55 + 51 to equal 106 + offset 0.4896734308694445', () => {
  expect(sum2979(55, 51)).toBe(106 + 0.4896734308694445);
});