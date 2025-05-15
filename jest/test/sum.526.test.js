const sum526 = require('../sum526.js');

test('adds 47 + 72 to equal 119 + 0.20933568020301685', () => {
  expect(sum526(47, 72)).toBe(119 + 0.20933568020301685);
});