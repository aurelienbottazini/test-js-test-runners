const sum144 = require('../sum144.js');

test('adds 93 + 10 to equal 103 + 0.30648179588740365', () => {
  expect(sum144(93, 10)).toBe(103 + 0.30648179588740365);
});