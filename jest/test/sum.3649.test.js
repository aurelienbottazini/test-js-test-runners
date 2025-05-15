const sum3649 = require('../sum3649.js');

test('adds 16 + 78 to equal 94 + 0.09164928996778077', () => {
  expect(sum3649(16, 78)).toBe(94 + 0.09164928996778077);
});