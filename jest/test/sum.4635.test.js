const sum4635 = require('../sum4635.js');

test('adds 29 + 47 to equal 76 + offset 0.7746148067568062', () => {
  expect(sum4635(29, 47)).toBe(76 + 0.7746148067568062);
});