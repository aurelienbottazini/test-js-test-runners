const sum503 = require('../sum503.js');

test('adds 49 + 64 to equal 113 + offset 0.22707818490803744', () => {
  expect(sum503(49, 64)).toBe(113 + 0.22707818490803744);
});