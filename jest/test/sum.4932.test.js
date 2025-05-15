const sum4932 = require('../sum4932.js');

test('adds 69 + 83 to equal 152 + offset 0.37273099807762444', () => {
  expect(sum4932(69, 83)).toBe(152 + 0.37273099807762444);
});