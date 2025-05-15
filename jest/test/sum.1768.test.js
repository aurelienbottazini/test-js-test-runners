const sum = require('../sum');

test('adds 5 + 61 to equal 66', () => {
  expect(sum(5, 61)).toBe(66);
});