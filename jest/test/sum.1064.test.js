const sum1064 = require('../sum1064.js');

test('adds 34 + 64 to equal 98 + offset 0.37003047944323697', () => {
  expect(sum1064(34, 64)).toBe(98 + 0.37003047944323697);
});