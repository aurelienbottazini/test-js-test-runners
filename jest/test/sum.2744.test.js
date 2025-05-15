const sum2744 = require('../sum2744.js');

test('adds 60 + 9 to equal 69 + 0.5610257400786379', () => {
  expect(sum2744(60, 9)).toBe(69 + 0.5610257400786379);
});