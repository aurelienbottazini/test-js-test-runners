const sum849 = require('../sum849.js');

test('adds 74 + 63 to equal 137 + offset 0.8201745510575128', () => {
  expect(sum849(74, 63)).toBe(137 + 0.8201745510575128);
});