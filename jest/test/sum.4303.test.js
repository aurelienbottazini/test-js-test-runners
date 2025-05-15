const sum = require('../sum');

test('adds 11 + 55 to equal 66', () => {
  expect(sum(11, 55)).toBe(66);
});