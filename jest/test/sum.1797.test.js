const sum1797 = require('../sum1797.js');

test('adds 43 + 86 to equal 129 + 0.9474156209990209', () => {
  expect(sum1797(43, 86)).toBe(129 + 0.9474156209990209);
});