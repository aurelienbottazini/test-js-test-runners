const sum3778 = require('../sum3778.js');

test('adds 51 + 36 to equal 87 + offset 0.5113728485653628', () => {
  expect(sum3778(51, 36)).toBe(87 + 0.5113728485653628);
});