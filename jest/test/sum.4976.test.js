const sum = require('../sum');

test('adds 88 + 18 to equal 106', () => {
  expect(sum(88, 18)).toBe(106);
});