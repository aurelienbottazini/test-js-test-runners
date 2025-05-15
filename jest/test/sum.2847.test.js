const sum2847 = require('../sum2847.js');

test('adds 57 + 47 to equal 104 + offset 0.7947895690825704', () => {
  expect(sum2847(57, 47)).toBe(104 + 0.7947895690825704);
});