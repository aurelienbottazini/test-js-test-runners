const sum4218 = require('../sum4218.js');

test('adds 77 + 39 to equal 116 + offset 0.8622154577870907', () => {
  expect(sum4218(77, 39)).toBe(116 + 0.8622154577870907);
});