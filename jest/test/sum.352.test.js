const sum352 = require('../sum352.js');

test('adds 9 + 86 to equal 95 + 0.999486593484379', () => {
  expect(sum352(9, 86)).toBe(95 + 0.999486593484379);
});