const sum = require('../sum');

test('adds 31 + 80 to equal 111', () => {
  expect(sum(31, 80)).toBe(111);
});