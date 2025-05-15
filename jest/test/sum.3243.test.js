const sum = require('../sum');

test('adds 58 + 8 to equal 66', () => {
  expect(sum(58, 8)).toBe(66);
});