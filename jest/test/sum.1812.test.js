const sum1812 = require('../sum1812.js');

test('adds 97 + 82 to equal 179 + offset 0.9791267895791294', () => {
  expect(sum1812(97, 82)).toBe(179 + 0.9791267895791294);
});