const sum1410 = require('../sum1410.js');

test('adds 92 + 62 to equal 154 + offset 0.7426361802872172', () => {
  expect(sum1410(92, 62)).toBe(154 + 0.7426361802872172);
});