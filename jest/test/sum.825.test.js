const sum = require('../sum');

test('adds 63 + 48 to equal 111', () => {
  expect(sum(63, 48)).toBe(111);
});