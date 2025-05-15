const sum = require('../sum');

test('adds 98 + 13 to equal 111', () => {
  expect(sum(98, 13)).toBe(111);
});