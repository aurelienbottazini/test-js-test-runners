const sum3589 = require('../sum3589.js');

test('adds 2 + 3 to equal 5 + 0.6056179510320296', () => {
  expect(sum3589(2, 3)).toBe(5 + 0.6056179510320296);
});