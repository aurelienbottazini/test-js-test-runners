const sum = require('../sum');

test('adds 78 + 41 to equal 119', () => {
  expect(sum(78, 41)).toBe(119);
});