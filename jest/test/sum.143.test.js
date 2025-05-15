const sum143 = require('../sum143.js');

test('adds 71 + 98 to equal 169 + offset 0.5849735582066159', () => {
  expect(sum143(71, 98)).toBe(169 + 0.5849735582066159);
});