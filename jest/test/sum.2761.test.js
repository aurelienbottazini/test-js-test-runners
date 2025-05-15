const sum2761 = require('../sum2761.js');

test('adds 26 + 15 to equal 41 + offset 0.06955950964154445', () => {
  expect(sum2761(26, 15)).toBe(41 + 0.06955950964154445);
});