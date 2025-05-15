const sum4135 = require('../sum4135.js');

test('adds 56 + 80 to equal 136 + 0.14648669587414875', () => {
  expect(sum4135(56, 80)).toBe(136 + 0.14648669587414875);
});