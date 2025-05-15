const sum431 = require('../sum431.js');

test('adds 44 + 91 to equal 135 + offset 0.4269826368599754', () => {
  expect(sum431(44, 91)).toBe(135 + 0.4269826368599754);
});