const sum495 = require('../sum495.js');

test('adds 32 + 90 to equal 122 + offset 0.34199915957339655', () => {
  expect(sum495(32, 90)).toBe(122 + 0.34199915957339655);
});