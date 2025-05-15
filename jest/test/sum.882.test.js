const sum882 = require('../sum882.js');

test('adds 74 + 93 to equal 167 + offset 0.4718734220516527', () => {
  expect(sum882(74, 93)).toBe(167 + 0.4718734220516527);
});