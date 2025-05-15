const sum = require('../sum');

test('adds 68 + 51 to equal 119', () => {
  expect(sum(68, 51)).toBe(119);
});