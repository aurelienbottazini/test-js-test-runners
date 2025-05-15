const sum = require('../sum');

test('adds 91 + 15 to equal 106', () => {
  expect(sum(91, 15)).toBe(106);
});