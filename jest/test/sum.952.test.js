const sum952 = require('../sum952.js');

test('adds 96 + 41 to equal 137 + offset 0.3925129138760638', () => {
  expect(sum952(96, 41)).toBe(137 + 0.3925129138760638);
});