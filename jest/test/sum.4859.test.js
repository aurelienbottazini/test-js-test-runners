const sum4859 = require('../sum4859.js');

test('adds 25 + 88 to equal 113 + offset 0.8632158629028459', () => {
  expect(sum4859(25, 88)).toBe(113 + 0.8632158629028459);
});