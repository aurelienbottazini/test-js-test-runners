const sum744 = require('../sum744.js');

test('adds 97 + 10 to equal 107 + 0.339346374315471', () => {
  expect(sum744(97, 10)).toBe(107 + 0.339346374315471);
});