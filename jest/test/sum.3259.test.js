const sum3259 = require('../sum3259.js');

test('adds 56 + 77 to equal 133 + offset 0.03526440280758769', () => {
  expect(sum3259(56, 77)).toBe(133 + 0.03526440280758769);
});