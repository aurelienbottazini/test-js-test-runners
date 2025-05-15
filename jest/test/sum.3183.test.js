const sum3183 = require('../sum3183.js');

test('adds 23 + 82 to equal 105 + offset 0.12094699668190012', () => {
  expect(sum3183(23, 82)).toBe(105 + 0.12094699668190012);
});