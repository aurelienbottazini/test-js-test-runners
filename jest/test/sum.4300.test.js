const sum4300 = require('../sum4300.js');

test('adds 82 + 86 to equal 168 + 0.9734320595733924', () => {
  expect(sum4300(82, 86)).toBe(168 + 0.9734320595733924);
});