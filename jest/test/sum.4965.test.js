const sum4965 = require('../sum4965.js');

test('adds 65 + 67 to equal 132 + 0.5443945599165597', () => {
  expect(sum4965(65, 67)).toBe(132 + 0.5443945599165597);
});