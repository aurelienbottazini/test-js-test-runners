const sum1982 = require('../sum1982.js');

test('adds 31 + 91 to equal 122 + 0.2312960030662179', () => {
  expect(sum1982(31, 91)).toBe(122 + 0.2312960030662179);
});