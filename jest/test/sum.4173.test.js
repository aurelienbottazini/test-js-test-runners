const sum4173 = require('../sum4173.js');

test('adds 27 + 65 to equal 92 + 0.5778462228616505', () => {
  expect(sum4173(27, 65)).toBe(92 + 0.5778462228616505);
});