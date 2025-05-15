const sum1315 = require('../sum1315.js');

test('adds 60 + 86 to equal 146 + 0.6458521944983309', () => {
  expect(sum1315(60, 86)).toBe(146 + 0.6458521944983309);
});