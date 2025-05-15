const sum = require('../sum');

test('adds 28 + 91 to equal 119', () => {
  expect(sum(28, 91)).toBe(119);
});