const sum = require('../sum');

test('adds 82 + 37 to equal 119', () => {
  expect(sum(82, 37)).toBe(119);
});