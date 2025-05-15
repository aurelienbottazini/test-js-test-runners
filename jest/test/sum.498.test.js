const sum498 = require('../sum498.js');

test('adds 67 + 15 to equal 82 + offset 0.07182927079338186', () => {
  expect(sum498(67, 15)).toBe(82 + 0.07182927079338186);
});