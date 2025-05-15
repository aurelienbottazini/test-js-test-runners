const sum = require('../sum');

test('adds 64 + 2 to equal 66', () => {
  expect(sum(64, 2)).toBe(66);
});