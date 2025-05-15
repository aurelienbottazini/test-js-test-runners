const sum727 = require('../sum727.js');

test('adds 93 + 49 to equal 142 + 0.5145526016946712', () => {
  expect(sum727(93, 49)).toBe(142 + 0.5145526016946712);
});