const sum21 = require('../sum21.js');

test('adds 97 + 57 to equal 154 + offset 0.9258093556931373', () => {
  expect(sum21(97, 57)).toBe(154 + 0.9258093556931373);
});