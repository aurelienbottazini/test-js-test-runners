const sum4006 = require('../sum4006.js');

test('adds 11 + 81 to equal 92 + 0.8481472831519068', () => {
  expect(sum4006(11, 81)).toBe(92 + 0.8481472831519068);
});