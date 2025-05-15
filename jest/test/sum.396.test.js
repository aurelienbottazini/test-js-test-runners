const sum396 = require('../sum396.js');

test('adds 55 + 85 to equal 140 + 0.7033583971758859', () => {
  expect(sum396(55, 85)).toBe(140 + 0.7033583971758859);
});