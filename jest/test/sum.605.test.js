const sum605 = require('../sum605.js');

test('adds 97 + 57 to equal 154 + offset 0.8847430401045124', () => {
  expect(sum605(97, 57)).toBe(154 + 0.8847430401045124);
});