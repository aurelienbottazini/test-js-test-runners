const sum = require('../sum');

test('adds 66 + 45 to equal 111', () => {
  expect(sum(66, 45)).toBe(111);
});