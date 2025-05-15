const sum4888 = require('../sum4888.js');

test('adds 54 + 62 to equal 116 + offset 0.7372816391613637', () => {
  expect(sum4888(54, 62)).toBe(116 + 0.7372816391613637);
});