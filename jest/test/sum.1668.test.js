const sum1668 = require('../sum1668.js');

test('adds 80 + 16 to equal 96 + offset 0.9152393405063728', () => {
  expect(sum1668(80, 16)).toBe(96 + 0.9152393405063728);
});