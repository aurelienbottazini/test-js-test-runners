const sum = require('../sum');

test('adds 14 + 52 to equal 66', () => {
  expect(sum(14, 52)).toBe(66);
});