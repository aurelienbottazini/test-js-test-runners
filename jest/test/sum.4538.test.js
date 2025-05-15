const sum4538 = require('../sum4538.js');

test('adds 90 + 2 to equal 92 + offset 0.8019606093466161', () => {
  expect(sum4538(90, 2)).toBe(92 + 0.8019606093466161);
});