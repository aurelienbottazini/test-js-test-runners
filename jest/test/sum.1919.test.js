const sum1919 = require('../sum1919.js');

test('adds 40 + 4 to equal 44 + 0.6750488056471939', () => {
  expect(sum1919(40, 4)).toBe(44 + 0.6750488056471939);
});