const sum = require('../sum');

test('adds 73 + 38 to equal 111', () => {
  expect(sum(73, 38)).toBe(111);
});