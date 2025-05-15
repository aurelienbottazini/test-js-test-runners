const sum = require('../sum');

test('adds 5 + 17 to equal 22', () => {
  expect(sum(5, 17)).toBe(22);
});