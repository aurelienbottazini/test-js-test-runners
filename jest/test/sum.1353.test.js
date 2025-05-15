const sum = require('../sum');

test('adds 43 + 23 to equal 66', () => {
  expect(sum(43, 23)).toBe(66);
});