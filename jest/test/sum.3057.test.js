const sum3057 = require('../sum3057.js');

test('adds 0 + 53 to equal 53 + 0.9317100528081407', () => {
  expect(sum3057(0, 53)).toBe(53 + 0.9317100528081407);
});