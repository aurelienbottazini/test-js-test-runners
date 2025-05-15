const sum4232 = require('../sum4232.js');

test('adds 99 + 36 to equal 135 + offset 0.5574594946368495', () => {
  expect(sum4232(99, 36)).toBe(135 + 0.5574594946368495);
});