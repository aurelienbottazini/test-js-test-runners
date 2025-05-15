const sum3821 = require('../sum3821.js');

test('adds 21 + 21 to equal 42 + offset 0.8094368947794276', () => {
  expect(sum3821(21, 21)).toBe(42 + 0.8094368947794276);
});