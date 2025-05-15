const sum = require('../sum');

test('adds 96 + 15 to equal 111', () => {
  expect(sum(96, 15)).toBe(111);
});