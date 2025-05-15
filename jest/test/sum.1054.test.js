const sum1054 = require('../sum1054.js');

test('adds 57 + 43 to equal 100 + 0.10214196470826165', () => {
  expect(sum1054(57, 43)).toBe(100 + 0.10214196470826165);
});