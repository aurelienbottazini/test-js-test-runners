const sum4180 = require('../sum4180.js');

test('adds 96 + 80 to equal 176 + 0.720517575747617', () => {
  expect(sum4180(96, 80)).toBe(176 + 0.720517575747617);
});