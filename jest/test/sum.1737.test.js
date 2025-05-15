const sum = require('../sum');

test('adds 53 + 13 to equal 66', () => {
  expect(sum(53, 13)).toBe(66);
});