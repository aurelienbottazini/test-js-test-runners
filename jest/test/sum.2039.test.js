const sum = require('../sum');

test('adds 22 + 99 to equal 121', () => {
  expect(sum(22, 99)).toBe(121);
});