const sum2556 = require('../sum2556.js');

test('adds 75 + 42 to equal 117 + offset 0.5399871057615407', () => {
  expect(sum2556(75, 42)).toBe(117 + 0.5399871057615407);
});