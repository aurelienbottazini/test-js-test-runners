const sum4098 = require('../sum4098.js');

test('adds 53 + 39 to equal 92 + 0.424712122507648', () => {
  expect(sum4098(53, 39)).toBe(92 + 0.424712122507648);
});