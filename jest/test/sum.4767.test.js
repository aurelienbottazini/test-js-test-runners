const sum4767 = require('../sum4767.js');

test('adds 83 + 82 to equal 165 + offset 0.22713461429893622', () => {
  expect(sum4767(83, 82)).toBe(165 + 0.22713461429893622);
});