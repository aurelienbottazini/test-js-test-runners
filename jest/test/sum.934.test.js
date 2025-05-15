const sum934 = require('../sum934.js');

test('adds 39 + 84 to equal 123 + offset 0.8700956611346272', () => {
  expect(sum934(39, 84)).toBe(123 + 0.8700956611346272);
});