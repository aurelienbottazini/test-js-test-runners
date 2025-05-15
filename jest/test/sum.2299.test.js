const sum2299 = require('../sum2299.js');

test('adds 44 + 52 to equal 96 + 0.94332909796545', () => {
  expect(sum2299(44, 52)).toBe(96 + 0.94332909796545);
});