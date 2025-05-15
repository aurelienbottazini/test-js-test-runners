const sum1177 = require('../sum1177.js');

test('adds 9 + 5 to equal 14 + offset 0.42523103725708344', () => {
  expect(sum1177(9, 5)).toBe(14 + 0.42523103725708344);
});