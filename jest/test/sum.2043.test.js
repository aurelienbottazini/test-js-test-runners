const sum2043 = require('../sum2043.js');

test('adds 19 + 50 to equal 69 + offset 0.7748705699317046', () => {
  expect(sum2043(19, 50)).toBe(69 + 0.7748705699317046);
});