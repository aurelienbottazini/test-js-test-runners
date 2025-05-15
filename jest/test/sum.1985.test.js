const sum1985 = require('../sum1985.js');

test('adds 79 + 59 to equal 138 + offset 0.6092195248787744', () => {
  expect(sum1985(79, 59)).toBe(138 + 0.6092195248787744);
});