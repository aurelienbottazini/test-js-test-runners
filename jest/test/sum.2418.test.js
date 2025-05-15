const sum = require('../sum');

test('adds 88 + 58 to equal 146', () => {
  expect(sum(88, 58)).toBe(146);
});