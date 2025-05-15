const sum = require('../sum');

test('adds 22 + 18 to equal 40', () => {
  expect(sum(22, 18)).toBe(40);
});