const sum = require('../sum');

test('adds 55 + 64 to equal 119', () => {
  expect(sum(55, 64)).toBe(119);
});