const sum2064 = require('../sum2064.js');

test('adds 6 + 17 to equal 23 + offset 0.9870998568986822', () => {
  expect(sum2064(6, 17)).toBe(23 + 0.9870998568986822);
});