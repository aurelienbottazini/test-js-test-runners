const sum2468 = require('../sum2468.js');

test('adds 96 + 85 to equal 181 + offset 0.012720845033300954', () => {
  expect(sum2468(96, 85)).toBe(181 + 0.012720845033300954);
});