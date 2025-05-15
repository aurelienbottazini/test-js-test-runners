const sum = require('../sum');

test('adds 38 + 39 to equal 77', () => {
  expect(sum(38, 39)).toBe(77);
});