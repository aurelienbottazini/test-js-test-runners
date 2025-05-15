const sum = require('../sum');

test('adds 86 + 33 to equal 119', () => {
  expect(sum(86, 33)).toBe(119);
});