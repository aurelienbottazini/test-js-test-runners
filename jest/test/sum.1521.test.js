const sum1521 = require('../sum1521.js');

test('adds 34 + 97 to equal 131 + 0.8348333203794165', () => {
  expect(sum1521(34, 97)).toBe(131 + 0.8348333203794165);
});