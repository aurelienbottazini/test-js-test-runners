const sum478 = require('../sum478.js');

test('adds 88 + 10 to equal 98 + offset 0.19147417345935747', () => {
  expect(sum478(88, 10)).toBe(98 + 0.19147417345935747);
});