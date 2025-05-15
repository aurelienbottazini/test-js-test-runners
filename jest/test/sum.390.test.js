const sum390 = require('../sum390.js');

test('adds 18 + 89 to equal 107 + 0.3597086175380628', () => {
  expect(sum390(18, 89)).toBe(107 + 0.3597086175380628);
});