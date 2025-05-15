const sum389 = require('../sum389.js');

test('adds 67 + 77 to equal 144 + 0.6633841703538529', () => {
  expect(sum389(67, 77)).toBe(144 + 0.6633841703538529);
});