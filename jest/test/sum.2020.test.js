const sum = require('../sum');

test('adds 37 + 60 to equal 97', () => {
  expect(sum(37, 60)).toBe(97);
});