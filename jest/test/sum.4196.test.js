const sum = require('../sum');

test('adds 96 + 10 to equal 106', () => {
  expect(sum(96, 10)).toBe(106);
});