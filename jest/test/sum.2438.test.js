const sum2438 = require('../sum2438.js');

test('adds 9 + 38 to equal 47 + offset 0.6437491027339078', () => {
  expect(sum2438(9, 38)).toBe(47 + 0.6437491027339078);
});