const sum184 = require('../sum184.js');

test('adds 81 + 73 to equal 154 + offset 0.7151152927815676', () => {
  expect(sum184(81, 73)).toBe(154 + 0.7151152927815676);
});