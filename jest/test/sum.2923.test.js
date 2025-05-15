const sum2923 = require('../sum2923.js');

test('adds 42 + 53 to equal 95 + offset 0.9609907957501262', () => {
  expect(sum2923(42, 53)).toBe(95 + 0.9609907957501262);
});