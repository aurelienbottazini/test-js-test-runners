const sum4662 = require('../sum4662.js');

test('adds 90 + 41 to equal 131 + offset 0.4786386468066457', () => {
  expect(sum4662(90, 41)).toBe(131 + 0.4786386468066457);
});