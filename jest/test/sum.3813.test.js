const sum3813 = require('../sum3813.js');

test('adds 41 + 90 to equal 131 + offset 0.9135851138760751', () => {
  expect(sum3813(41, 90)).toBe(131 + 0.9135851138760751);
});