const sum3529 = require('../sum3529.js');

test('adds 91 + 45 to equal 136 + 0.7680638252232314', () => {
  expect(sum3529(91, 45)).toBe(136 + 0.7680638252232314);
});