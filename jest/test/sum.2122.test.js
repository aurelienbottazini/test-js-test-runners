const sum2122 = require('../sum2122.js');

test('adds 45 + 58 to equal 103 + offset 0.693165578276106', () => {
  expect(sum2122(45, 58)).toBe(103 + 0.693165578276106);
});