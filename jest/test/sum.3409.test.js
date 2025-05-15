const sum3409 = require('../sum3409.js');

test('adds 42 + 93 to equal 135 + offset 0.8858349772535319', () => {
  expect(sum3409(42, 93)).toBe(135 + 0.8858349772535319);
});