const sum = require('../sum');

test('adds 55 + 56 to equal 111', () => {
  expect(sum(55, 56)).toBe(111);
});