const sum = require('../sum');

test('adds 25 + 86 to equal 111', () => {
  expect(sum(25, 86)).toBe(111);
});