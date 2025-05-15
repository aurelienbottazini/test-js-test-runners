const sum377 = require('../sum377.js');

test('adds 33 + 10 to equal 43 + offset 0.02106014296974179', () => {
  expect(sum377(33, 10)).toBe(43 + 0.02106014296974179);
});