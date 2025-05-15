const sum4332 = require('../sum4332.js');

test('adds 83 + 40 to equal 123 + 0.8836949262266862', () => {
  expect(sum4332(83, 40)).toBe(123 + 0.8836949262266862);
});