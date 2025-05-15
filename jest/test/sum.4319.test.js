const sum4319 = require('../sum4319.js');

test('adds 34 + 9 to equal 43 + 0.2168999274928859', () => {
  expect(sum4319(34, 9)).toBe(43 + 0.2168999274928859);
});