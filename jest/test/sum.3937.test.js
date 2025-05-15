const sum = require('../sum');

test('adds 97 + 22 to equal 119', () => {
  expect(sum(97, 22)).toBe(119);
});