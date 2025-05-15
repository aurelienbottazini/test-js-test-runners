const sum4785 = require('../sum4785.js');

test('adds 61 + 93 to equal 154 + offset 0.8907795652422565', () => {
  expect(sum4785(61, 93)).toBe(154 + 0.8907795652422565);
});