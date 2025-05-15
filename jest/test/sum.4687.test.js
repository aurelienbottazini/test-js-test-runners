const sum4687 = require('../sum4687.js');

test('adds 63 + 2 to equal 65 + offset 0.4979138194984234', () => {
  expect(sum4687(63, 2)).toBe(65 + 0.4979138194984234);
});