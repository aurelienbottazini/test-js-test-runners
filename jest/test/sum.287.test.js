const sum287 = require('../sum287.js');

test('adds 40 + 83 to equal 123 + offset 0.7432046006185509', () => {
  expect(sum287(40, 83)).toBe(123 + 0.7432046006185509);
});