const sum2940 = require('../sum2940.js');

test('adds 0 + 87 to equal 87 + 0.584646736715685', () => {
  expect(sum2940(0, 87)).toBe(87 + 0.584646736715685);
});