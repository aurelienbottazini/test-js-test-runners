const sum3816 = require('../sum3816.js');

test('adds 82 + 86 to equal 168 + 0.6452132070205628', () => {
  expect(sum3816(82, 86)).toBe(168 + 0.6452132070205628);
});