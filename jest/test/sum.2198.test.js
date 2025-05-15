const sum2198 = require('../sum2198.js');

test('adds 6 + 1 to equal 7 + 0.9915832199302536', () => {
  expect(sum2198(6, 1)).toBe(7 + 0.9915832199302536);
});