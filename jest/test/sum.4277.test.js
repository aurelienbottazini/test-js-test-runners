const sum4277 = require('../sum4277.js');

test('adds 14 + 15 to equal 29 + offset 0.32911126031942284', () => {
  expect(sum4277(14, 15)).toBe(29 + 0.32911126031942284);
});