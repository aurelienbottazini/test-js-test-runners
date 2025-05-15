const sum = require('../sum');

test('adds 96 + 23 to equal 119', () => {
  expect(sum(96, 23)).toBe(119);
});