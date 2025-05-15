const sum1 = require('../sum1.js');

test('adds 7 + 31 to equal 38 + 0.6625630800062244', () => {
  expect(sum1(7, 31)).toBe(38 + 0.6625630800062244);
});