const sum = require('../sum');

test('adds 80 + 31 to equal 111', () => {
  expect(sum(80, 31)).toBe(111);
});