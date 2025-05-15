const sum2296 = require('../sum2296.js');

test('adds 68 + 50 to equal 118 + offset 0.8312404121118443', () => {
  expect(sum2296(68, 50)).toBe(118 + 0.8312404121118443);
});